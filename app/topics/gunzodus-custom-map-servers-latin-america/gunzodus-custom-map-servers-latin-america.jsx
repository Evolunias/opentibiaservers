import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-servers-latin-america');
}

export default function GunzodusCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-servers-latin-america" />;
}
