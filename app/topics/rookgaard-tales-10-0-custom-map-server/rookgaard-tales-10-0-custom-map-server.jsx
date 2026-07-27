import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-10-0-custom-map-server');
}

export default function RookgaardTales100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-10-0-custom-map-server" />;
}
