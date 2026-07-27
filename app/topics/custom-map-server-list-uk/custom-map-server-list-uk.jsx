import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-server-list-uk');
}

export default function CustomMapServerListUkKeywordPage() {
  return <StaticKeywordPage slug="custom-map-server-list-uk" />;
}
