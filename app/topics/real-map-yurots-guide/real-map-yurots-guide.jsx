import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-yurots-guide');
}

export default function RealMapYurotsGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-yurots-guide" />;
}
