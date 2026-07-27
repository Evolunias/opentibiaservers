import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-servers-europe');
}

export default function GunzodusCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-servers-europe" />;
}
