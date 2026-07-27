import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rookgaard-tales-ot');
}

export default function RealMapRookgaardTalesOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-rookgaard-tales-ot" />;
}
