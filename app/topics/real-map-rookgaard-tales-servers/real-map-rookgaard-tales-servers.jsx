import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rookgaard-tales-servers');
}

export default function RealMapRookgaardTalesServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-rookgaard-tales-servers" />;
}
