import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rubinot-guide');
}

export default function RealMapRubinotGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-rubinot-guide" />;
}
