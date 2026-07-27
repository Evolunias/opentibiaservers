import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-7-1-custom-map-server');
}

export default function RookgaardTales71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-7-1-custom-map-server" />;
}
