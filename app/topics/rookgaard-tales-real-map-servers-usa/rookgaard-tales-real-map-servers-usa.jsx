import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-real-map-servers-usa');
}

export default function RookgaardTalesRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-real-map-servers-usa" />;
}
