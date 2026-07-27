import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-11-real-map-server');
}

export default function RookgaardTales11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-11-real-map-server" />;
}
