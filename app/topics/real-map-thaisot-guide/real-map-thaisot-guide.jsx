import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thaisot-guide');
}

export default function RealMapThaisotGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-thaisot-guide" />;
}
