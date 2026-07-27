import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-11-custom-map-server');
}

export default function RookgaardTales11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-11-custom-map-server" />;
}
