import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-gunzodus-website');
}

export default function TopGunzodusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-gunzodus-website" />;
}
