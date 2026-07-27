import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-gunzodus-website');
}

export default function CustomGunzodusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-gunzodus-website" />;
}
