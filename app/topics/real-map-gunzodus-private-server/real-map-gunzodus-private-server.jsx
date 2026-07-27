import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-gunzodus-private-server');
}

export default function RealMapGunzodusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-gunzodus-private-server" />;
}
