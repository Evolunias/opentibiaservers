import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-gunzodus-server');
}

export default function HighrateGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-gunzodus-server" />;
}
