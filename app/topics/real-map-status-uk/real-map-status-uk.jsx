import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-status-uk');
}

export default function RealMapStatusUkKeywordPage() {
  return <StaticKeywordPage slug="real-map-status-uk" />;
}
