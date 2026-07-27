import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-15-custom-map-server');
}

export default function RookgaardTales15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-15-custom-map-server" />;
}
