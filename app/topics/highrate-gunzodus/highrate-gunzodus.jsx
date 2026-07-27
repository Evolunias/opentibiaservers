import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-gunzodus');
}

export default function HighrateGunzodusKeywordPage() {
  return <StaticKeywordPage slug="highrate-gunzodus" />;
}
