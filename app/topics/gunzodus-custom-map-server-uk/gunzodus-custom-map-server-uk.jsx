import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-server-uk');
}

export default function GunzodusCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-server-uk" />;
}
