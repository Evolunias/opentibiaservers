import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-servers-north-america');
}

export default function GunzodusCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-servers-north-america" />;
}
