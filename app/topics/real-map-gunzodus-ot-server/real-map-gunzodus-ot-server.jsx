import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-gunzodus-ot-server');
}

export default function RealMapGunzodusOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-gunzodus-ot-server" />;
}
