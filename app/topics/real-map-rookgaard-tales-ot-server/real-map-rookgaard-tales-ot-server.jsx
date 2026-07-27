import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rookgaard-tales-ot-server');
}

export default function RealMapRookgaardTalesOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-rookgaard-tales-ot-server" />;
}
