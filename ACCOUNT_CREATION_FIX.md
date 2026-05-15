# Account Creation Fix

## Issues Found

### 1. **Missing `accounts` Table**
The main issue was that the `accounts` table was never being created in the Aiven MySQL database. The API endpoint `/api/evomanias/auth` was trying to insert/query from a non-existent table, causing a 500 error and the "Unexpected end of JSON input" error when the frontend tried to parse the error response.

**Files affected:**
- `app/api/evomanias/init-db/route.js` - Missing `accounts` table definition

### 2. **Weak Error Handling in Auth Endpoint**
The auth route didn't properly catch and handle database errors, which made debugging difficult.

**Files affected:**
- `app/api/evomanias/auth/route.js` - Missing try-catch for database operations

### 3. **Account ID Type Mismatch**
The `players` table was expecting `account_id` as VARCHAR, but the `accounts` table uses INT as the primary key.

**Files affected:**
- `app/api/evomanias/init-db/route.js` - `players.account_id` column type was wrong

## Changes Made

### 1. Updated Database Schema (`app/api/evomanias/init-db/route.js`)
- Added `accounts` table creation with:
  - `id` (INT AUTO_INCREMENT PRIMARY KEY)
  - `name` (VARCHAR UNIQUE)
  - `email` (VARCHAR UNIQUE)
  - `password` (VARCHAR for bcrypt hashes)
  - Proper indexes on email and name
  - Timestamps

- Fixed `players` table:
  - Changed `account_id` from VARCHAR to INT
  - Added FOREIGN KEY constraint to `accounts.id`
  - Enabled cascading delete

### 2. Improved Error Handling (`app/api/evomanias/auth/route.js`)
- Added proper try-catch for JSON parsing
- Better error logging with error details
- Proper connection cleanup with `finally` block
- More descriptive error messages

### 3. Created Database Init Script (`scripts/init-db.js`)
A standalone Node.js script to initialize the database without going through the API.

## How to Initialize the Database

### Option 1: Using the API Endpoint
Call the initialization endpoint:
```bash
curl -X POST http://your-domain/api/evomanias/init-db \
  -H "Authorization: Bearer init-secret-key" \
  -H "Content-Type: application/json"
```

### Option 2: Using the Init Script
```bash
export AIVEN_MYSQL_HOST=your-host
export AIVEN_MYSQL_PORT=your-port
export AIVEN_MYSQL_USER=your-user
export AIVEN_MYSQL_PASSWORD=your-password
export AIVEN_MYSQL_DATABASE=your-database

node scripts/init-db.js
```

### Option 3: Using Environment Variables
If running in production, ensure these env vars are set:
- `AIVEN_MYSQL_HOST`
- `AIVEN_MYSQL_PORT` 
- `AIVEN_MYSQL_USER`
- `AIVEN_MYSQL_PASSWORD`
- `AIVEN_MYSQL_DATABASE`

Then reload the app and trigger the init endpoint.

## Testing the Fix

1. **Initialize database** using one of the methods above
2. **Test registration** at `/evomanias/register`
3. **Test login** at `/evomanias/login`
4. Verify accounts are being stored in the `accounts` table

## Expected Behavior After Fix

✓ Registration form submits successfully
✓ Account data is saved to Aiven MySQL `accounts` table
✓ Login works with registered credentials
✓ No "Unexpected end of JSON input" error
✓ Clear error messages for validation failures
