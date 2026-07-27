import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-gunzodus-private-server');
}

export default function HighrateGunzodusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-gunzodus-private-server" />;
}
