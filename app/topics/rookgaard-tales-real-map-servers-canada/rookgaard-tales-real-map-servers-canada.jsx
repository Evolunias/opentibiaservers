import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-real-map-servers-canada');
}

export default function RookgaardTalesRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-real-map-servers-canada" />;
}
