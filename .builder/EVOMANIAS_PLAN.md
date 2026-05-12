# EVOMANIAS Standalone Website Transformation Plan

## Overview
Transform `/evomanias` into a completely separate website from Open Tibia Servers, inspired by evolunia.net, cyntara.org, and evolisca.com. The site will be its own brand with custom theme, layout, and data management through Aiven MySQL.

## Phase 1: Routing & Layout Isolation

### 1.1 Root Layout Modification
- Modify `app/layout.jsx` to skip rendering Header/Footer for `/evomanias/*` routes
- Use route detection: if `pathname.startsWith('/evomanias')`, use minimal wrapper
- Keep separate `app/evomanias/layout.jsx` for EVOMANIAS-specific layout

### 1.2 CSS & Theming
- Create `app/evomanias/evomanias.css` for isolated EVOMANIAS styling
- Define custom color palette based on Evolunia/Cyntara:
  - Primary accent: `#7cb8ff` (cyan/blue) or custom color
  - Dark backgrounds: `rgba(20, 20, 25, 0.75)` with glassmorphism
  - Text: `rgba(255, 255, 255, 0.85)` to `rgba(255, 255, 255, 0.95)`
  - Success/Status: `#00bc8c` (green)
- Use Tailwind for utility classes; extend config for custom colors

## Phase 2: Design & Layout Overhaul

### 2.1 Header Redesign
- Modern navbar with:
  - Logo/brand on left (EVOMANIAS)
  - Main nav items: Home, Highscores, Community, Store(?), Library(?)
  - Search bar (character search)
  - Auth buttons (Login/Register or Account dropdown)
  - Mobile hamburger menu
  - Glassmorphism effect: `backdrop-filter: blur(12px)`, semi-transparent background

### 2.2 Home Page Redesign
Inspired by Evolunia/Cyntara news/patch layout:
- **Top Section**: Hero with CTA buttons (Create Account / Login)
- **Server Status Box**: (sidebar-style or top card)
  - Online players
  - Server status (online/offline)
  - Uptime
  - Download button
- **Latest News/Patches Section**: Feed of posts with:
  - Date sidebar (border-framed date like Cyntara)
  - Title
  - Content snippet
  - Posted by
  - View Thread link
- **Top Players/Highscores**: Table or card view
  - Rank, character name, vocation, level, exp
  - Link to character details
- **Footer**: Links, copyright, Discord widget (optional)

### 2.3 Sidebar Components (Optional)
- Top 5 Players card
- Server Information card
- Discord embed widget (optional)
- Links/Quick Access

## Phase 3: Database Schema (Aiven MySQL)

### 3.1 Ensure Tables Exist
Create/verify these tables in Aiven:
- `accounts`: id, email, password_hash, created_at, updated_at
- `characters`: id, account_id, name, level, vocation, experience, status, created_at
- `news/patches`: id, title, content, posted_by, posted_date, category
- `guilds`: id, name, leader_id, created_at
- `guild_members`: id, guild_id, character_id, rank
- `highscores`: computed from characters table (or materialized view)
- `server_status`: last_online_count, last_update_time

### 3.2 Seed Data
- Create sample data for development/demo

## Phase 4: API Routes (Aiven Integration)

### 4.1 Character API
- `GET /api/evomanias/characters?action=highscores&limit=5&sort=level`
- `GET /api/evomanias/characters/[id]` - character details
- `POST /api/evomanias/characters` - create character (auth required)
- `PUT/DELETE /api/evomanias/characters/[id]` - update/delete

### 4.2 News/Patches API
- `GET /api/evomanias/news?limit=10&offset=0` - fetch latest posts
- `GET /api/evomanias/news/[id]` - single post
- `POST /api/evomanias/news` - create post (admin only)

### 4.3 Account/Auth API
- `POST /api/evomanias/auth/register` - create account (Aiven)
- `POST /api/evomanias/auth/login` - authenticate (Aiven)
- `GET /api/evomanias/auth/me` - current user info

### 4.4 Server Status API
- `GET /api/evomanias/status` - online count, server status, uptime

## Phase 5: Frontend Pages

### 5.1 Pages to Build/Update
- `/evomanias/` - Home page (redesigned)
- `/evomanias/highscores` - Highscores table with filters
- `/evomanias/character/[id]` - Character detail page
- `/evomanias/login` - Login form
- `/evomanias/register` - Registration form
- `/evomanias/account` - Account dashboard
- `/evomanias/news` - News/patches feed (optional)
- `/evomanias/community` - Community section (optional)

### 5.2 Component Structure
- `app/evomanias/components/EvomaniasHeader.jsx` - custom header
- `app/evomanias/components/EvomaniasFooter.jsx` - custom footer
- `app/evomanias/components/ServerStatus.jsx` - status card
- `app/evomanias/components/TopPlayers.jsx` - top 5 card
- `app/evomanias/components/NewsCard.jsx` - news item
- `app/evomanias/components/HighscoresTable.jsx` - table

## Phase 6: Data Flow & Security

### 6.1 Aiven Connection
- Verify env vars: AIVEN_MYSQL_HOST, AIVEN_MYSQL_USER, AIVEN_MYSQL_PASSWORD, AIVEN_MYSQL_DATABASE, AIVEN_MYSQL_PORT
- Use connection pooling (already configured in `lib/aiven.js`)
- Connection is secure (SSL/TLS required for Aiven)

### 6.2 Data Fetching
- Use server-side fetches via API routes (more secure, avoids exposing DB)
- Cache highscores/news where appropriate (revalidate every 5-10 minutes)
- Validate all user inputs on server-side before DB operations

### 6.3 Authentication
- Use JWT or session-based auth (already context setup in place)
- Hash passwords with bcrypt (dependency exists)
- Secure auth tokens storage (httpOnly cookies recommended)

## Phase 7: Styling & Responsiveness

### 7.1 Design System
- Use Tailwind CSS classes (already configured)
- Extend tailwind.config.js for custom colors/animations
- Glassmorphism: overlay backgrounds with `backdrop-filter: blur(12px)`
- Gradient accents: blues, cyans, purples
- Card styling: dark semi-transparent with light borders

### 7.2 Responsive Design
- Mobile-first approach
- Desktop breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Hide/show elements based on breakpoint (hidden-xs, hidden-md, etc.)
- Sidebar on desktop; full-width on mobile

## Phase 8: Testing & Polish

### 8.1 Testing
- Test data fetch from Aiven (highscores, news, characters)
- Test auth flow (register, login, logout)
- Test responsive design (mobile, tablet, desktop)
- Test performance (caching, query optimization)

### 8.2 Polish
- Error handling & loading states
- Animations & transitions (smooth, performant)
- Accessibility (ARIA labels, keyboard navigation)
- SEO (meta tags, structured data)

## Implementation Order
1. Create Aiven table schema & seed data
2. Modify root layout for route-based isolation
3. Create custom EVOMANIAS styling & theme
4. Redesign header & footer
5. Update home page layout & design
6. Create API routes for data fetching
7. Build highscores & character pages
8. Polish & test
9. Deploy
