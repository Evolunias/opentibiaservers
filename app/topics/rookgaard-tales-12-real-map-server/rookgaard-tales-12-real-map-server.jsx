import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-12-real-map-server');
}

export default function RookgaardTales12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-12-real-map-server" />;
}
