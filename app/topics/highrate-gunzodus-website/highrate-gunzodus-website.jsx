import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-gunzodus-website');
}

export default function HighrateGunzodusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-gunzodus-website" />;
}
