/**
 * Get the local sprite URL for a creature
 * @param {string|number} imageId - The outfit image ID
 * @returns {string} The local sprite URL or fallback
 */
export function getCreatureSpriteUrl(imageId) {
  if (!imageId) return null;
  return `/sprites/creatures/${imageId}.gif`;
}

/**
 * Get a placeholder or fallback URL for missing creature images
 * @returns {string} A placeholder URL
 */
export function getCreaturePlaceholder() {
  return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="64" height="64"%3E%3Crect width="64" height="64" fill="%23333"/%3E%3Ctext x="32" y="32" text-anchor="middle" dy=".3em" fill="%23666" font-size="12"%3E%3F%3C/text%3E%3C/svg%3E';
}
