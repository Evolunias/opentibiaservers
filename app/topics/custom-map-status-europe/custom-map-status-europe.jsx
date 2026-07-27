import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-status-europe');
}

export default function CustomMapStatusEuropeKeywordPage() {
  return <StaticKeywordPage slug="custom-map-status-europe" />;
}
