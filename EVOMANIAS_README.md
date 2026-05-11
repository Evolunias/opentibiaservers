# Evomanias - Complete Website

A full-featured Tibia server website built with Next.js, Supabase auth, and MySQL backend integration.

## 🎮 Features

### User Features
- **Account Management**
  - Sign up with email and password
  - Login/Logout
  - Profile management
  - Character creation and management

- **Highscores**
  - Real-time leaderboard rankings
  - Filter by vocation (Knight, Sorcerer, Cleric, Ranger, Paladin)
  - Search by character name
  - Sort by level or experience
  - Character detail pages

- **Server Status**
  - Live player count
  - Server status indicator
  - Connection information

- **Character Management**
  - Create characters
  - View character details
  - Track experience and level
  - Character profiles with rich information

### Admin Features
- Character data management
- Server status monitoring
- User management
- Data synchronization with MySQL backend

## 📁 Project Structure

```
app/
├── evomanias/
│   ├── layout.jsx              # Evomanias section layout
│   ├── page.jsx                # Home page
│   ├── login/
│   │   └── page.jsx            # Login page
│   ├── register/
│   │   └── page.jsx            # Registration page
│   ├── account/
│   │   └── page.jsx            # Account dashboard
│   ├── highscores/
│   │   └── page.jsx            # Leaderboard
│   └── character/
│       └── [id]/
│           └── page.jsx        # Character detail page
├── components/
│   ├── Header.jsx              # Navigation header
│   └── ...other shared components
└── context/
    └── AuthContext.jsx         # Authentication context
lib/
├── evomaniasActions.js         # API layer for backend integration
└── supabase.js                 # Supabase client setup
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn
- Supabase project (for authentication)
- MySQL server (optional, for backend integration)

### Installation

1. **Install dependencies**
```bash
npm install
```

2. **Setup environment variables**
Create `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
NEXT_PUBLIC_EVOMANIAS_API_URL=http://localhost:8000/api
```

3. **Run the development server**
```bash
npm run dev
```

Visit `http://localhost:3000/evomanias`

## 🔗 Pages & Routes

| Route | Purpose | Auth Required |
|-------|---------|---------------|
| `/evomanias` | Home page | No |
| `/evomanias/register` | Account creation | No |
| `/evomanias/login` | Sign in | No |
| `/evomanias/account` | Dashboard | ✅ Yes |
| `/evomanias/highscores` | Leaderboard | No |
| `/evomanias/character/[id]` | Character details | No |

## 🔐 Authentication

The website uses **Supabase Auth** for user authentication:

- Email/password based login
- Automatic session management
- User profile storage
- Role-based access control

### Setting up Auth

1. Create a Supabase project
2. Enable Email authentication
3. Create the `user_profiles` table:
```sql
create table user_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique,
  avatar_url text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);
```

4. Add your API URLs to Supabase Auth settings

## 🗄️ API Integration

The website communicates with your backend API through the `lib/evomaniasActions.js` layer.

### Required API Endpoints

- `GET /api/highscores` - Get ranked characters
- `GET /api/characters/{id}` - Get character details
- `GET /api/users/{userId}/characters` - Get user's characters
- `POST /api/characters` - Create character
- `DELETE /api/characters/{id}` - Delete character
- `GET /api/status` - Get server status

See `EVOMANIAS_API_SETUP.md` for detailed endpoint documentation.

## 🎨 Customization

### Theming

The site uses Tailwind CSS. Modify colors in:
- `app/globals.css` - Global styles
- `tailwind.config.js` - Theme configuration
- Component files - Individual component styling

### Branding

Update these files to customize branding:
- `app/evomanias/layout.jsx` - Meta tags
- `app/components/Header.jsx` - Navigation
- `app/evomanias/page.jsx` - Home page content

## 📊 Database Schema

### Users (Supabase)
```sql
-- auth.users (managed by Supabase)
id
email
password_hash
created_at
last_sign_in_at

-- user_profiles
id (fk: auth.users.id)
username
avatar_url
created_at
updated_at
```

### Characters (Your MySQL Backend)
```sql
CREATE TABLE characters (
  id INT PRIMARY KEY AUTO_INCREMENT,
  account_id VARCHAR(255) NOT NULL,
  name VARCHAR(255) UNIQUE NOT NULL,
  level INT DEFAULT 1,
  experience BIGINT DEFAULT 0,
  vocation VARCHAR(50),
  world VARCHAR(100),
  status VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP,
  FOREIGN KEY (account_id) REFERENCES user_profiles(id)
);
```

## 🔌 Backend Integration

### Option 1: Direct MySQL Connection
Implement your own API server that connects to MySQL and provides the required endpoints.

### Option 2: Supabase Edge Functions
Use Supabase Edge Functions (Deno) to query your MySQL database:

```typescript
// supabase/functions/get-highscores/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(async (req) => {
  // Query your MySQL database
  // Return JSON response
});
```

### Option 3: Next.js API Routes
Add server-side endpoints in `pages/api/`:

```javascript
// pages/api/evomanias/highscores.js
export default async function handler(req, res) {
  // Query your database
  // Return JSON
}
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy

```bash
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add NEXT_PUBLIC_EVOMANIAS_API_URL
```

### Netlify

```toml
# netlify.toml
[build]
  command = "npm run build"
  functions = "supabase/functions"
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🐛 Troubleshooting

### API Connection Issues
- Check `NEXT_PUBLIC_EVOMANIAS_API_URL` is set correctly
- Verify backend server is running
- Check CORS headers are configured

### Auth Problems
- Ensure Supabase URL and keys are correct
- Verify `user_profiles` table exists
- Check auth redirect URLs in Supabase

### Character Not Showing
- Verify API endpoint returns correct format
- Check character ID parameter is valid
- Review console for error messages

## 📈 Performance Optimization

- Implement caching for highscores
- Add pagination to character lists
- Use image optimization
- Lazy load components
- Enable compression

## 🔒 Security

- All API requests should be authenticated
- Validate user input on frontend and backend
- Use HTTPS in production
- Store sensitive data server-side only
- Implement rate limiting
- Add CSRF protection

## 📝 License

This project is proprietary to Evomanias.

## 🤝 Support

For issues and questions about the Evomanias website, contact the development team.

---

**Last Updated:** January 2024  
**Version:** 1.0.0
