# User Journey & Data Flow

## User Registration Flow

```
┌─────────────────────────────────────────────────────────────┐
│ User visits / (Homepage)                                    │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ Header displays: Register | Sign In (Guest user)            │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ User clicks "Register"                                      │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ Navigate to /auth/register                                  │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ Fill form:                                                  │
│ - Username: "player123"                                     │
│ - Email: "player@example.com"                               │
│ - Password: "SecurePass123"                                 │
│ - Confirm Password: "SecurePass123"                         │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ Frontend validates form                                     │
│ ✓ All fields present                                        │
│ ✓ Passwords match                                           │
│ ✓ Password >= 6 characters                                  │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ Submit to Supabase Auth                                     │
│ (POST to auth.signUp)                                       │
└─────────────────────────────────────────────────────────────┘
                            ↓
                    ┌───────┴───────┐
                    ↓               ↓
        ┌──────────────────┐ ┌──────────────────┐
        │ Success ✓        │ │ Error ✗          │
        └──────────────────┘ └──────────────────┘
                    ↓               ↓
        ┌──────────────────┐ ┌──────────────────┐
        │ Create entry in  │ │ Show error:      │
        │ user_profiles    │ │ - Email exists   │
        │ with username    │ │ - Network error  │
        └──────────────────┘ └──────────────────┘
                    ↓               ↓
        ┌──────────────────┐ ┌──────────────────┐
        │ Redirect to      │ │ Stay on form,    │
        │ /dashboard       │ │ clear password   │
        └──────────────────┘ └──────────────────┘
```

## Server Submission Flow

```
┌─────────────────────────────────────────────────────────────┐
│ Logged-in user clicks "Submit Server"                       │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ Navigate to /submit-server (protected route)                │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ User fills comprehensive form:                              │
│ - Server Name: "Dragon Slayers"                             │
│ - IP: "92.123.45.67"                                        │
│ - Port: "7171"                                              │
│ - Owner Email: "admin@example.com"                          │
│ - Website: "dragonslayers.com" (optional)                   │
│ - Version: "13.0"                                           │
│ - World Type: "PVP"                                         │
│ - Location: "Europe"                                        │
│ - Exp/Skill/Loot rates                                      │
│ - Description                                               │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ Frontend validates form                                     │
│ ✓ Name present                                              │
│ ✓ IP format valid                                           │
│ ✓ Port in range (1-65535)                                   │
│ ✓ Owner email present                                       │
│ ✓ Version selected                                          │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ INSERT into servers table with:                             │
│ - user_id: current_user.id                                  │
│ - verification_status: "pending"                            │
│ - ... server data fields ...                                │
└─────────────────────────────────────────────────────────────┘
                            ↓
                    ┌───────┴───────┐
                    ↓               ↓
        ┌──────────────────┐ ┌──────────────────┐
        │ Success ✓        │ │ Error ✗          │
        │ Server inserted  │ │ IP already       │
        │ with new ID      │ │ exists OR        │
        │                  │ │ network error    │
        └──────────────────┘ └──────────────────┘
                    ↓               ↓
        ┌──────────────────┐ ┌──────────────────┐
        │ 2-second delay   │ │ Show error msg   │
        │ then trigger     │ │ Stay on form     │
        │ verification     │ │ Can retry        │
        └──────────────────┘ └──────────────────┘
                    ↓
        ┌──────────────────────────────────────┐
        │ Call verification edge function      │
        │ POST /functions/v1/verify-server     │
        │ Body: { serverId }                   │
        └──────────────────────────────────────┘
                    ↓
        ┌──────────────────────────────────────┐
        │ Show success message:                │
        │ "Server submitted! Verification"     │
        │ "will begin shortly."                │
        └──────────────────────────────────────┘
                    ↓
        ┌──────────────────────────────────────┐
        │ 2-second delay                       │
        └──────────────────────────────────────┘
                    ↓
        ┌──────────────────────────────────────┐
        │ Redirect to /dashboard               │
        └──────────────────────────────────────┘
```

## Server Verification Flow

```
┌──────────────────────────────────────────────────────┐
│ Edge Function receives: { serverId }                 │
│ POST /functions/v1/verify-server                     │
└──────────────────────────────────────────────────────┘
                        ↓
┌──────────────────────────────────────────────────────┐
│ Fetch server record from database                    │
│ SELECT * FROM servers WHERE id = serverId            │
└──────────────────────────────────────────────────────┘
                        ↓
                ┌───────┴───────┐
                ↓               ↓
    ┌──────────────────┐ ┌──────────────────┐
    │ Server found ✓   │ │ Not found ✗      │
    └──────────────────┘ └──────────────────┘
                ↓               ↓
    ┌──────────────────┐ ┌──────────────────┐
    │ Proceed to       │ │ Return error     │
    │ verification     │ │ status: "failed" │
    └──────────────────┘ └──────────────────┘
                ↓
    ┌──────────────────────────────────────┐
    │ 1. DNS VERIFICATION (if website URL) │
    │    Lookup: domain → IP               │
    │    Compare: dns_ip === server.ip     │
    │    Timeout: 5 seconds                │
    │    Result: true/false                │
    └──────────────────────────────────────┘
                ↓
    ┌──────────────────────────────────────┐
    │ 2. IP/PORT VERIFICATION              │
    │    Try HTTP HEAD to IP:port          │
    │    Or TCP socket connect             │
    │    Timeout: 5 seconds                │
    │    Result: true/false                │
    └──────────────────────────────────────┘
                ↓
    ┌──────────────────────────────────────┐
    │ Determine overall status             │
    │ Overall = ipVerified ? "verified"    │
    │                      : "failed"      │
    └──────────────────────────────────────┘
                ↓
    ┌──────────────────────────────────────┐
    │ UPDATE servers table:                │
    │ - verification_status: "verified"    │
    │ - verification_dns_checked: true     │
    │ - verification_ip_checked: true      │
    │ - verification_error: null or text   │
    │ - verified_at: NOW()                 │
    └──────────────────────────────────────┘
                ↓
    ┌──────────────────────────────────────┐
    │ Return response:                     │
    │ {                                    │
    │   serverId: "...",                   │
    │   dnsVerified: true/false,           │
    │   ipVerified: true/false,            │
    │   overallStatus: "verified|failed"   │
    │ }                                    │
    └──────────────────────────────────────┘
                ↓
    ┌──────────────────────────────────────┐
    │ Server status updated in database    │
    │ User can see status in:              │
    │ - /dashboard (verification badge)   │
    │ - /server/[id] (detailed status)    │
    │ - Server card (small badge)         │
    └──────────────────────────────────────┘
```

## Dashboard Management Flow

```
┌─────────────────────────────────────────────────────┐
│ User navigates to /dashboard                        │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│ AuthContext checks: Is user logged in?              │
└─────────────────────────────────────────────────────┘
                        ↓
                ┌───────┴───────┐
                ↓               ↓
    ┌──────────────────┐ ┌──────────────────┐
    │ User logged in ✓ │ │ Not logged in ✗  │
    └──────────────────┘ └──────────────────┘
                ↓               ↓
    ┌──────────────────┐ ┌──────────────────┐
    │ Load dashboard   │ │ Redirect to      │
    │ components       │ │ /auth/login      │
    └──────────────────┘ └──────────────────┘
                ↓
    ┌──────────────────────────────────────┐
    │ Fetch user profile data:             │
    │ SELECT * FROM user_profiles          │
    │ WHERE id = user.id                   │
    └──────────────────────────────────────┘
                ↓
    ┌──────────────────────────────────────┐
    │ Display user info:                   │
    │ - Avatar (from email initial)        │
    │ - Username                           │
    │ - Email                              │
    │ - Account creation date              │
    └──────────────────────────────────────┘
                ↓
    ┌──────────────────────────────────────┐
    │ Fetch user's servers:                │
    │ SELECT * FROM servers                │
    │ WHERE user_id = user.id              │
    │ ORDER BY created_at DESC             │
    └──────────────────────────────────────┘
                ↓
    ┌──────────────────────────────────────┐
    │ Calculate statistics:                │
    │ - Total: COUNT(*)                    │
    │ - Verified: COUNT WHERE              │
    │   verification_status = 'verified'   │
    │ - Pending: COUNT WHERE               │
    │   verification_status = 'pending'    │
    │ - Failed: COUNT WHERE                │
    │   verification_status = 'failed'     │
    └──────────────────────────────────────┘
                ↓
    ┌──────────────────────────────────────┐
    │ Display server table with:           │
    │ - Server name (linked to /server/id) │
    │ - IP:Port                            │
    │ - Online/Offline status              │
    │ - Verification badge (✓/⏳/✗)        │
    │ - Submission date                    │
    │ - Actions: View, Delete              │
    └──────────────────────────────────────┘
                ↓
    ┌──────────────────────────────────────┐
    │ User clicks actions:                 │
    │ - "View": Navigate to /server/id     │
    │ - "Delete": Confirm & DELETE         │
    │ - "Submit Server": Navigate to       │
    │   /submit-server                     │
    │ - "Sign Out": Call signOut()         │
    └──────────────────────────────────────┘
```

## Data Model

```
┌─────────────────────────────────────────────────────┐
│ supabase (PostgreSQL)                               │
└─────────────────────────────────────────────────────┘

┌──────────────────────┐      ┌──────────────────────┐
│   auth.users         │      │  user_profiles       │
├──────────────────────┤      ├──────────────────────┤
│ id (UUID, PK)        │◄─────│ id (UUID, FK)        │
│ email (text, unique) │      │ username (text)      │
│ encrypted_password   │      │ avatar_url (text)    │
│ created_at           │      │ created_at           │
│ updated_at           │      │ updated_at           │
└──────────────────────┘      └──────────────────────┘
         △                              △
         │                              │
         │ (1 to 1)                     │
         │                              │
         └──────────────────────────────┘


┌──────────────────────┐      ┌──────────────────────┐
│   auth.users         │      │     servers          │
├──────────────────────┤      ├──────────────────────┤
│ id (UUID, PK)        │◄─────│ user_id (UUID, FK)   │
│ email                │      │ id (UUID, PK)        │
│ ...                  │      │ name (text)          │
└──────────────────────┘      │ ip (text)            │
         △                     │ port (int)           │
         │                     │ version (text)       │
         │                     │ world_type (text)    │
         │                     │ exp_rate (numeric)   │
         │                     │ ...other fields...   │
         │ (1 to many)         │ verification_status  │
         │                     │ verification_dns_chk │
         │                     │ verification_ip_chk  │
         │                     │ verification_error   │
         │                     │ verified_at          │
         │                     │ created_at           │
         │                     │ updated_at           │
         │                     └──────────────────────┘
         │
         └─────────────────────────────────────────────
              1 user can have many servers
              1 server has 1 owner (user_id)
```

## API Call Sequence

```
USER CLIENT                    SUPABASE                    EDGE FUNCTION
     │                             │                             │
     │──── POST auth/signup ─────→ │                             │
     │                             │ ✓ Create user              │
     │ ✓ User created          ←── │                             │
     │                             │                             │
     │──── INSERT user_profile ──→ │                             │
     │                             │ ✓ Profile created          │
     │ ✓ Profile saved         ←── │                             │
     │                             │                             │
     │──── POST submit/server ───→ │                             │
     │                             │ ✓ Server inserted           │
     │ ✓ Server ID returned    ←── │                             │
     │                             │                             │
     │──── POST /verify-server ─────────────────────────────────→│
     │                             │                             │
     │                             │                    ✓ Check DNS
     │                             │                    ✓ Check IP/Port
     │                             │                    
     │                             │    ✓ Update server record   
     │                             │←─────────────────────────────│
     │                             │                             │
     │ ✓ Verification complete ←── │                             │
     │                             │                             │
     │──── GET /dashboard ───────→ │                             │
     │                             │ ✓ Fetch servers           │
     │ ✓ Servers displayed     ←── │                             │
     │                             │                             │
```

## States & Transitions

```
Server Lifecycle:
    
    UNVERIFIED
        │ (Auto after 2 seconds)
        ↓
    PENDING
        │ (Verification runs)
        ├─→ VERIFIED ✓ (IP check passed)
        │
        └─→ FAILED ✗ (IP check failed or error)


User Journey:
    
    GUEST
        │ (Click Register)
        ↓
    REGISTERED (on /auth/register)
        │ (Click Sign In)
        ↓
    AUTHENTICATED (on /dashboard)
        │ (Click Submit Server)
        ├─→ VIEWING_FORM (on /submit-server)
        │   │ (Submit form)
        │   ↓
        │   SERVER_SUBMITTED (success message)
        │   │ (Redirect 2 seconds)
        │   ↓
        │   MANAGING_SERVERS (back on /dashboard)
        │
        └─→ SIGNED_OUT (after logout)
            ↓
        GUEST


Verification Lifecycle:

    UNVERIFIED → PENDING → {VERIFIED, FAILED}
                               ↓
                          (Stays in this state)
```
