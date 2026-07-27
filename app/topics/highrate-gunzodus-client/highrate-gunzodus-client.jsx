import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-gunzodus-client');
}

export default function HighrateGunzodusClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-gunzodus-client" />;
}
