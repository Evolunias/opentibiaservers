import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-15-real-map-server');
}

export default function RookgaardTales15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-15-real-map-server" />;
}
