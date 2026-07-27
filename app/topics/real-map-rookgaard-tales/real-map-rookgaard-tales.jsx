import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rookgaard-tales');
}

export default function RealMapRookgaardTalesKeywordPage() {
  return <StaticKeywordPage slug="real-map-rookgaard-tales" />;
}
