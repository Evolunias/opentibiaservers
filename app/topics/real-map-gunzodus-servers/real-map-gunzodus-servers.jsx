import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-gunzodus-servers');
}

export default function RealMapGunzodusServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-gunzodus-servers" />;
}
