import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-servers-uk');
}

export default function GunzodusCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-servers-uk" />;
}
