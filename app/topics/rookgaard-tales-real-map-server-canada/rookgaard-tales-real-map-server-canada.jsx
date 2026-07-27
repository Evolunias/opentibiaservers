import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-real-map-server-canada');
}

export default function RookgaardTalesRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-real-map-server-canada" />;
}
