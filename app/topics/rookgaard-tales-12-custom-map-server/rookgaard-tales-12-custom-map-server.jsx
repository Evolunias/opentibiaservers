import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-12-custom-map-server');
}

export default function RookgaardTales12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-12-custom-map-server" />;
}
