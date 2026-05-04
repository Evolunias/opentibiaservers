# Asset Localization Status and Implementation Guide

## Status Summary

The asset localization infrastructure is now complete and all code has been updated to support local asset serving with intelligent fallback to external URLs. The system is **fully functional** and ready for image assets.

## Completed Work

✅ **Infrastructure Setup**
- Created `/public/sprites/items/` directory for item sprites
- Created `/public/sprites/creatures/` directory for creature sprites  
- Created `/public/images/ui/` directory for UI assets (logo)
- Updated image-manifest.json with complete structure for all asset types

✅ **Code Updates**
- **image-utils.js**: Updated with intelligent fallback system
  - `getLogoUrl()`: Returns logo from manifest or external URL
  - `getImageUrl()`: Supports both local and external paths
  - `getImageData()`: Looks up image info from manifest
  - Configuration controls: `useLocalImages` (currently false), `fallbackToExternal` (true)

- **sprite-utils.js**: Full sprite lookup system
  - `getSpriteUrl()`: Returns sprite URL with fallback
  - `getSpriteData()`: Returns complete sprite information
  - Configuration supports switching between local and external

- **Components Updated**:
  - `layout.jsx`: Uses `getLogoUrl()` for logo loading
  - `ItemsClient.jsx`: Uses `getItemSpriteUrl()` and `getSpriteUrl()`
  - `creatures/page.jsx`: Uses image utilities with fallback
  - `bosses/page.jsx`: Uses image data from manifest

✅ **Manifest Configuration**
- `public/data/image-manifest.json`: Complete structure with:
  - UI assets (logo) section
  - Item sprites mapping (94 items with IDs and URLs)
  - Creature images mapping (ready for creature data)
  - Download status tracking

## Current State: Intelligent Fallback System

Since evolisca.com blocks automated downloads (403 Forbidden), the system is configured to:

1. **Primary Source**: External URLs (evolisca.com)
   - All assets currently load from evolisca.com
   - Reliable and always available while server is online

2. **Fallback**: Local assets
   - When local images are added, they will be used automatically
   - Configuration: Set `useLocalImages: true` in image-utils.js and sprite-utils.js

3. **Infrastructure**: 
   - All code paths are ready for local assets
   - Directory structure is in place
   - Image manifest tracks both local and external paths

## How to Add Local Assets (When Available)

### 1. Adding Item Sprites

**Directory**: `/public/sprites/items/`
**Naming**: `{item-id}.gif` (e.g., `2152.gif`, `2148.gif`)

```bash
# Place item sprite in:
public/sprites/items/2152.gif
```

The manifest already maps all items with their IDs, so adding files automatically makes them available.

### 2. Adding Creature Images

**Directory**: `/public/sprites/creatures/`
**Naming**: `{creature-name-snake-case}.gif`

```bash
# Example:
public/sprites/creatures/alpha_ape.gif
public/sprites/creatures/ancient_fungus.gif
```

Update the manifest:
```json
{
  "name": "Alpha Ape",
  "internalPath": "/sprites/creatures/alpha_ape.gif",
  "externalUrl": "https://evolisca.com/...",
  "status": "local",
  "downloadedDate": "2026-04-14"
}
```

### 3. Adding Logo

**Directory**: `/public/images/ui/`
**Filename**: `logo.png` or `logo.webp`

The manifest already references this location:
```json
{
  "name": "Evolisca Logo",
  "internalPath": "/images/ui/logo.webp",
  "externalUrl": "https://evolisca.com/templates/server/images/logo.png"
}
```

## Enabling Local Assets

Once files are added, enable local asset serving:

### In `app/lib/image-utils.js`:
```javascript
const IMAGE_CONFIG = {
  useLocalImages: true,  // Change from false to true
  fallbackToExternal: true,
  // ...
};
```

### In `app/lib/sprite-utils.js`:
```javascript
const SPRITE_CONFIG = {
  useLocalSprites: true,  // Change from false to true
  fallbackToExternal: true,
  // ...
};
```

## Image Loading Behavior

### Current (useLocalImages: false)
```
Request Image → Check External URL → Load from evolisca.com
```

### When Local (useLocalImages: true)
```
Request Image → Check Local Path → Fallback to External URL → Load from evolisca.com
```

## Asset Status

| Asset Type | Count | Local Status | External URL |
|-----------|-------|--------------|--------------|
| Item Sprites | 94 | ⏳ Pending | ✅ Working |
| Creature Images | 0 | ⏳ Pending | ✅ Available |
| UI Assets (Logo) | 1 | ⏳ Pending | ✅ Working |

## Development Notes

### Why External Downloads Failed

The evolisca.com server blocks automated HTTP downloads with 403 Forbidden status. This is likely:
- Rate limiting protection
- Bot prevention
- CORS/Security policies

**Solution**: Manual asset upload or browser-based extraction

### Testing the System

```javascript
// Check current configuration
import { getImageConfig } from '@/app/lib/image-utils';
import { getSpriteConfig } from '@/app/lib/sprite-utils';

console.log(getImageConfig());   // Shows current settings
console.log(getSpriteConfig());  // Shows sprite settings

// Get image URL
import { getLogoUrl, getImageUrl } from '@/app/lib/image-utils';
console.log(getLogoUrl());                        // Returns logo URL
console.log(getImageUrl('platinum-coin', 'items')); // Returns item sprite URL
```

### Debugging Image Loading

All components have error handlers to hide broken images:
```jsx
onError={(e) => {
  e.target.style.display = 'none';
}}
```

Check browser console for failed image requests to identify missing assets.

## Path Reference

```
/public/
  ├── data/
  │   └── image-manifest.json      (Central asset registry)
  ├── images/
  │   └── ui/
  │       ├── logo.png             (Local logo file)
  │       └── logo.webp            (Local logo file)
  └── sprites/
      ├── items/                   (94 item sprites stored by ID)
      │   ├── 2152.gif             (Platinum Coin)
      │   ├── 2148.gif             (Gold Coin)
      │   └── ...
      └── creatures/               (Creature images stored by name)
          ├── alpha_ape.gif
          └── ...

/app/lib/
  ├── image-utils.js               (Logo & UI asset utilities)
  ├── sprite-utils.js              (Item sprite utilities)
  ├── image-lookup.js              (Item lookup)
  └── item-lookup.js               (Item information)

/app/
  ├── layout.jsx                   (Uses getLogoUrl())
  ├── items/ItemsClient.jsx        (Uses getSpriteUrl())
  ├── creatures/page.jsx           (Uses image utilities)
  └── bosses/page.jsx              (Uses manifest data)
```

## Next Steps

1. **Obtain Local Assets**
   - Manual download from evolisca.com
   - Browser-based extraction script
   - Asset migration tool (if evolisca.com restrictions are lifted)

2. **Add to Repository**
   - Place files in appropriate directories
   - Update image-manifest.json with file status
   - Verify checksum/file integrity

3. **Enable Local Serving**
   - Update configuration flags in image-utils.js and sprite-utils.js
   - Test on all pages
   - Monitor for broken images

4. **Performance Optimization**
   - Consider WebP conversion for logos
   - Sprite sheet creation for items
   - CDN caching headers

## Troubleshooting

### Logo Not Showing
- Check `/public/images/ui/logo.png` exists and is valid
- Verify browser console for 404 errors
- Try the external URL: https://evolisca.com/templates/server/images/logo.png

### Item Sprites Not Appearing
- Ensure `/public/sprites/items/{id}.gif` files exist
- Check sprite-mapping.json has correct item IDs
- Verify `useLocalSprites` is true
- Check browser console for failed requests

### Fallback Not Working
- Verify `fallbackToExternal: true` in configuration
- Ensure `externalUrl` is set in manifest
- Check network connectivity to evolisca.com

## References

- [image-utils.js](app/lib/image-utils.js) - Main image utility functions
- [sprite-utils.js](app/lib/sprite-utils.js) - Sprite lookup and serving
- [image-manifest.json](public/data/image-manifest.json) - Asset registry
- [ItemsClient.jsx](app/items/ItemsClient.jsx) - Example component usage
