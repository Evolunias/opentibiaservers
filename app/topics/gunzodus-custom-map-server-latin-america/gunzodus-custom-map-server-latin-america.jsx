import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-server-latin-america');
}

export default function GunzodusCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-server-latin-america" />;
}
