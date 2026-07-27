import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-gunzodus-private-server');
}

export default function CurrentGunzodusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-gunzodus-private-server" />;
}
