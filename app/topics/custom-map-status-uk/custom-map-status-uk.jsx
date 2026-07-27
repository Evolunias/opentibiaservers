import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-status-uk');
}

export default function CustomMapStatusUkKeywordPage() {
  return <StaticKeywordPage slug="custom-map-status-uk" />;
}
