import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-gunzodus-private-server');
}

export default function LowrateGunzodusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-gunzodus-private-server" />;
}
