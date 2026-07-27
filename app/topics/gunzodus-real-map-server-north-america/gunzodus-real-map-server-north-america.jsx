import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-real-map-server-north-america');
}

export default function GunzodusRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-real-map-server-north-america" />;
}
