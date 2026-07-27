import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-servers-canada');
}

export default function GunzodusCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-servers-canada" />;
}
