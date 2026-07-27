import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rookgaard-tales-server');
}

export default function RealMapRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-rookgaard-tales-server" />;
}
