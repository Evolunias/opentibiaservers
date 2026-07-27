import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-status-europe');
}

export default function RealMapStatusEuropeKeywordPage() {
  return <StaticKeywordPage slug="real-map-status-europe" />;
}
