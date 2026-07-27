import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rookgaard-tales-guide');
}

export default function RealMapRookgaardTalesGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-rookgaard-tales-guide" />;
}
