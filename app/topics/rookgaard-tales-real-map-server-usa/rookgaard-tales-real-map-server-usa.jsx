import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-real-map-server-usa');
}

export default function RookgaardTalesRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-real-map-server-usa" />;
}
