import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-server-north-america');
}

export default function GunzodusCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-server-north-america" />;
}
