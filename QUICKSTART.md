# Quick Start Guide

## What's Ready

✓ **Authentication System** - User registration and login
✓ **Server Submission** - Form for authenticated users to submit servers  
✓ **Verification System** - Automatic DNS and IP/port checking
✓ **User Dashboard** - Manage servers and account
✓ **UI Integration** - All pages connected and styled

## Setup Steps

### Step 1: Create Database Tables (5 minutes)

1. Open [Supabase Dashboard](https://app.supabase.com)
2. Go to **SQL Editor**
3. Create a new query
4. Copy the entire content from `supabase/migrations/001_add_auth_and_users.sql` in this project
5. Click **Run**

This creates:
- `user_profiles` table
- Adds verification columns to `servers` table
- Sets up security policies

### Step 2: Deploy Verification Function (2 minutes)

The verification function checks if servers are real and reachable.

**Option A: Via Supabase CLI**
```bash
supabase functions deploy verify-server
```

**Option B: Via Dashboard**
1. Go to Supabase → **Edge Functions**
2. Click **Create Function** → name it `verify-server`
3. Copy content from `supabase/functions/verify-server/index.ts`
4. Click **Deploy**

### Step 3: Configure Auth URLs (2 minutes)

1. Go to Supabase → **Authentication** → **URL Configuration**
2. Set **Site URL** to your app URL:
   - Local: `http://localhost:3000`
   - Production: Your domain (e.g., `https://tibia-servers.com`)
3. Add **Redirect URLs**:
   ```
   http://localhost:3000/auth/login
   http://localhost:3000/auth/register
   http://localhost:3000/dashboard
   http://localhost:3000/submit-server
   ```
4. Click **Save**

### Step 4: Test the Application

1. Open http://localhost:3000
2. Click **Register** in top-right
3. Create test account:
   - Username: `testuser`
   - Email: `test@example.com`
   - Password: `Test123456!`
4. You'll be redirected to `/dashboard`
5. Click **Submit Server**
6. Fill form with test server:
   - **Server Name**: My Test Server
   - **IP**: `8.8.8.8` (public IP for testing)
   - **Port**: `7171`
   - **Owner Email**: Your email
   - Other fields: Fill as desired
7. Click **Submit Server**
8. Dashboard shows server with "⏳ Pending" status
9. After 10 seconds, status updates to "✓ Verified" or "✗ Failed"

## Testing Scenarios

### Test Registration/Login
```
Path: /auth/register
1. Create account with new email
2. Verify redirected to /dashboard
3. Click Sign Out
4. Go to /auth/login
5. Sign in with credentials
6. Verify redirected to /dashboard
```

### Test Server Submission
```
Path: /submit-server (must be logged in)
1. Fill all required fields
2. Check form validation (try submitting empty)
3. Submit server
4. Verify appears in dashboard
5. Check verification status after 10 seconds
```

### Test Anonymous Access
```
1. Sign out or use incognito window
2. Try to access /submit-server → Should redirect to login
3. Try to access /dashboard → Should redirect to login
4. Should be able to browse servers at / and /server/[id]
```

## Key URLs

| URL | Purpose | Auth Required |
|-----|---------|:-------------:|
| `/` | Home/Browse Servers | No |
| `/server/[id]` | Server Details | No |
| `/auth/register` | User Registration | No |
| `/auth/login` | User Sign-in | No |
| `/auth/logout` | Sign Out | Yes |
| `/dashboard` | User Dashboard | Yes |
| `/submit-server` | Submit New Server | Yes |

## Features Overview

### User Registration (`/auth/register`)
- Email, password, username
- Password confirmation
- Form validation
- Auto creates user profile

### User Login (`/auth/login`)
- Email and password
- Remembers login state
- Auto redirects if already logged in

### Server Submission (`/submit-server`)
- 13 form fields for complete server info
- Validates required fields
- Auto-triggers verification
- Shows success message

### User Dashboard (`/dashboard`)
- Account info with avatar
- 4 stat cards (Total, Verified, Pending, Failed)
- Server management table with:
  - Name, IP:Port, Status (Online/Offline)
  - Verification status with error display
  - Submission date
  - View/Delete actions
- Submit Server button

### Verification System
**Checks:**
- DNS: Does domain resolve to server IP?
- IP/Port: Is server responding at IP:port?

**Status:**
- ✓ Verified - Both checks passed
- ⏳ Pending - Currently checking
- ✗ Failed - Shows error message
- ○ Unverified - Not started yet

## Troubleshooting

### "Supabase connection error"
- Check environment variables: `echo $NEXT_PUBLIC_SUPABASE_URL`
- Verify credentials in Supabase dashboard
- Restart dev server: `npm run dev`

### "Cannot register user"
- Ensure migration was executed (check `user_profiles` table exists)
- Check Email auth is enabled in Supabase → Authentication
- Look for error message in browser console

### "Verification always fails"
- Edge function not deployed? Deploy it via Supabase dashboard
- Test with public IP (e.g., 8.8.8.8) initially
- Check Edge Function logs in Supabase dashboard

### "Can't access dashboard"
- Verify you're logged in (check top-right header)
- Check browser cookies enabled
- Try incognito window
- Clear browser cache

### "Server not appearing after submission"
- Check database: Go to Supabase → Table Editor → `servers`
- Verify `user_id` is populated
- Check RLS policies: Supabase → Authentication → Policies

## Next Steps

1. **Deploy to Production**
   - Push code to GitHub
   - Connect to Vercel/Netlify
   - Update Supabase URL configuration
   - Deploy verification edge function to production

2. **Customize**
   - Edit brand colors in components
   - Add custom logo
   - Modify form fields
   - Add email notifications

3. **Monitor**
   - Check Supabase logs: Dashboard → Logs
   - Monitor Edge Function: Functions → verify-server → Logs
   - Track user signups

4. **Scale**
   - Optimize verification (add job queue for bulk checks)
   - Add admin panel for management
   - Create API for integrations
   - Set up email notifications

## Support

- **Supabase Docs**: https://supabase.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Issues**: Check project issues for common problems

## What's Included

- ✅ Auth system with Supabase
- ✅ User registration/login pages
- ✅ Server submission form
- ✅ Automatic verification (DNS + IP checks)
- ✅ User dashboard
- ✅ Protected routes
- ✅ Database migrations
- ✅ Edge function for verification
- ✅ Beautiful UI with Tailwind CSS
- ✅ Fully responsive design
- ✅ Real-time status updates

## What You Need to Do

1. ⏳ Execute database migration (SQL)
2. ⏳ Deploy verification edge function
3. ⏳ Configure Supabase auth URLs
4. ✅ Test the application
5. ⏳ Deploy to production

**Total Setup Time: ~10 minutes**
