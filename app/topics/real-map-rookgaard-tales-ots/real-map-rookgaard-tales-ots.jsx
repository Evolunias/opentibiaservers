import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rookgaard-tales-ots');
}

export default function RealMapRookgaardTalesOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-rookgaard-tales-ots" />;
}
