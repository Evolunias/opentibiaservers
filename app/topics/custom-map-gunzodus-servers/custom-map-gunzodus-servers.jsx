import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-gunzodus-servers');
}

export default function CustomMapGunzodusServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-gunzodus-servers" />;
}
