import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-client-uk');
}

export default function CustomMapClientUkKeywordPage() {
  return <StaticKeywordPage slug="custom-map-client-uk" />;
}
