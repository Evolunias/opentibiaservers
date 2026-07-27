import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-gunzodus-website');
}

export default function LowrateGunzodusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-gunzodus-website" />;
}
