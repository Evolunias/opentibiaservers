# Authentication & User System Setup Guide

## Overview
This guide covers the complete setup for user registration, authentication, server submission, and verification system.

## What's New

### Phase 1: Authentication System ✓
- User registration and sign-in pages at `/auth/register` and `/auth/login`
- Auth context provider for managing user state across the app
- Supabase Auth integration with `user_profiles` table for additional user metadata

### Phase 2: Server Submission ✓
- `/submit-server` page for authenticated users to list their servers
- Form with comprehensive server configuration options
- Automatic user association with submitted servers

### Phase 3: Verification System ✓
- Edge function at `supabase/functions/verify-server/index.ts`
- DNS verification (checks if website domain resolves to server IP)
- IP/port connectivity verification
- Verification status tracking in database
- Automatic verification triggered after server submission

### Phase 4: UI Integration ✓
- Updated Header with auth links (Sign In, Register, Dashboard, Submit Server)
- User Dashboard at `/dashboard` with:
  - Account information
  - Submission statistics (Total, Verified, Pending, Failed)
  - Server management table
  - Delete server functionality
- Server detail page shows verification status
- Server cards show verification badges

## Database Setup Instructions

### 1. Run the Migration
Execute the SQL migration in `supabase/migrations/001_add_auth_and_users.sql` in your Supabase SQL Editor:

1. Go to Supabase Dashboard → SQL Editor
2. Create new query
3. Copy and paste the entire content from `supabase/migrations/001_add_auth_and_users.sql`
4. Click "Run"

This creates:
- `user_profiles` table
- New columns in `servers`: `user_id`, `verification_status`, `verification_dns_checked`, `verification_ip_checked`, `verification_error`, `verified_at`
- Row Level Security policies for both tables

### 2. Enable Supabase Auth

1. Go to Supabase Dashboard → Authentication → Providers
2. Ensure **Email** provider is enabled
3. Go to Authentication → URL Configuration
4. Add your site URL to **Site URL**: `http://localhost:3000` (for local) or your production URL
5. Add Redirect URLs:
   - `http://localhost:3000/auth/login`
   - `http://localhost:3000/auth/register`
   - `http://localhost:3000/dashboard`
   - Your production URLs

### 3. Verify RLS Policies

Check that policies are properly set:

```sql
-- View RLS policies
SELECT schemaname, tablename, policyname 
FROM pg_policies 
WHERE tablename IN ('user_profiles', 'servers');
```

## Edge Function Setup

### Deploy Verify Server Function

The verification function is located at `supabase/functions/verify-server/index.ts`

To deploy:

```bash
supabase functions deploy verify-server
```

Or manually via Supabase Dashboard:
1. Go to Edge Functions
2. Create new function named `verify-server`
3. Copy content from `supabase/functions/verify-server/index.ts`
4. Deploy

## Testing the System

### 1. Test Registration
- Navigate to `/auth/register`
- Create an account with:
  - Username: testuser
  - Email: test@example.com
  - Password: Test123456!

### 2. Test Server Submission
- After registration, you'll be redirected to `/dashboard`
- Click "Submit Server"
- Fill in server details:
  - Server Name: "My Test Server"
  - IP: "192.168.1.1" (or actual IP)
  - Port: 7171
  - Owner Email: Your email
  - Website URL: Optional (for DNS verification)
  - Other fields: Fill as desired

### 3. Check Verification Status
- Return to dashboard
- Your server will show "Pending" verification status
- Check `/server/[id]` to see detailed verification status
- After ~10 seconds, verification should complete

### 4. Test Sign In/Out
- Sign out via dashboard
- Navigate to `/auth/login`
- Sign in with your test account
- Should be redirected to dashboard

## Features

### User Dashboard (`/dashboard`)
- View account info and avatar
- See submission statistics:
  - Total servers submitted
  - Verified servers
  - Pending verification
  - Failed verification
- Manage servers:
  - View each submission
  - See verification status with error details
  - Delete servers
  - View live server link

### Server Submission (`/submit-server`)
- Protected route (requires authentication)
- Comprehensive form with:
  - Server identification (name, IP, port)
  - Contact info (email, website)
  - Version selection (8.0 - 13.0)
  - Gameplay settings (world type, location)
  - Experience rates (exp, skill, loot, spawn)
  - Server description
- Form validation
- Automatic verification trigger

### Verification System
- **DNS Verification**: Checks if website domain resolves to server IP
- **IP/Port Verification**: Attempts to connect to server at IP:port
- **Status Tracking**:
  - `unverified` - Not yet started
  - `pending` - Currently verifying
  - `verified` - Passed verification
  - `failed` - Failed to verify (with error message)
- **Error Messages**: Shows specific reason for verification failure

### Authentication
- User registration with email and password
- Sign-in with email/password
- Sign-out functionality
- Auth context available throughout app via `useAuth()` hook
- Automatic login state persistence

## API Endpoints

### Verification Edge Function
```
POST /functions/v1/verify-server

Request:
{
  "serverId": "uuid-string"
}

Response:
{
  "serverId": "uuid-string",
  "dnsVerified": boolean,
  "ipVerified": boolean,
  "overallStatus": "verified" | "failed" | "pending",
  "error": string (optional)
}
```

## Customization

### Modify Verification Timeout
In `/submit-server/page.jsx`, adjust the setTimeout after form submission:
```javascript
setTimeout(async () => {
  await triggerServerVerification(data.id);
}, 2000); // Change milliseconds
```

### Customize Verification Logic
Edit `supabase/functions/verify-server/index.ts` to modify:
- DNS check timeout (currently 5000ms)
- IP/port check method
- Verification success criteria

### Add More Server Fields
1. Add column to `servers` table in migration
2. Add field to submission form
3. Update `ServerCard` and server detail page to display

## Security Notes

1. **RLS Policies**: 
   - Users can only update their own servers
   - Servers can be read by anyone
   - New servers default to RLS-restricted insert/update

2. **Auth State**:
   - User session managed by Supabase Auth
   - Protected routes check auth state before rendering
   - Automatic redirect to login for unauthorized access

3. **Email Verification**:
   - Consider enabling email confirmation in Auth → Email Templates
   - Customize confirmation email if needed

## Troubleshooting

### "Supabase credentials not configured"
- Check `.env.local` has `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Restart dev server: `npm run dev`

### Users can't register
- Check Auth → Providers → Email is enabled
- Check SQL migration ran successfully
- Check `user_profiles` table exists: `SELECT * FROM user_profiles;`

### Verification always fails
- Check Edge Function deployed: Supabase Dashboard → Edge Functions
- Check function logs for errors
- Verify server IP and port are accessible
- Check DNS if using domain verification

### "Cannot read property 'id' of null"
- Ensure `user_profiles` table was created via migration
- Check RLS policies are not blocking inserts
- Verify Supabase Auth is enabled

## Next Steps

1. Deploy to production
2. Enable email confirmation for signups
3. Add password reset functionality
4. Implement admin panel for verification management
5. Add server statistics and monitoring
6. Create API for third-party integrations
