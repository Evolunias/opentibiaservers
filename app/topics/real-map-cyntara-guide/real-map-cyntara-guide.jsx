import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-cyntara-guide');
}

export default function RealMapCyntaraGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-cyntara-guide" />;
}
