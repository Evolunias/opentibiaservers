import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-gunzodus-website');
}

export default function OfficialGunzodusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-gunzodus-website" />;
}
