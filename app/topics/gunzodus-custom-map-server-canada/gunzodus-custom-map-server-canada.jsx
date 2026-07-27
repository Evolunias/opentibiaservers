import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-server-canada');
}

export default function GunzodusCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-server-canada" />;
}
