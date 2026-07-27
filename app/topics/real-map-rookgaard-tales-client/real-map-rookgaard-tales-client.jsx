import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rookgaard-tales-client');
}

export default function RealMapRookgaardTalesClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-rookgaard-tales-client" />;
}
