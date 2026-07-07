import { buildAbsoluteUrl, getSiteUrl } from '@/lib/seo';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/dashboard', '/submit-server'],
    },
    sitemap: buildAbsoluteUrl('/sitemap.xml'),
    host: getSiteUrl(),
  };
}
