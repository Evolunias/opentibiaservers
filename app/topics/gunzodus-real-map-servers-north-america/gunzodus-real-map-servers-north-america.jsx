import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-real-map-servers-north-america');
}

export default function GunzodusRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-real-map-servers-north-america" />;
}
