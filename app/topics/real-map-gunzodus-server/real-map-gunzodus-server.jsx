import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-gunzodus-server');
}

export default function RealMapGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-gunzodus-server" />;
}
