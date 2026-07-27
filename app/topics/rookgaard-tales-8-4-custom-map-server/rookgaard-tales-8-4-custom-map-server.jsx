import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-4-custom-map-server');
}

export default function RookgaardTales84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-4-custom-map-server" />;
}
