import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-gunzodus-server');
}

export default function CustomMapGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-gunzodus-server" />;
}
