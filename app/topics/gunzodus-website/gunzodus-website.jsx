import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-website');
}

export default function GunzodusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-website" />;
}
