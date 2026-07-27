import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-13-custom-map-server');
}

export default function RookgaardTales13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-13-custom-map-server" />;
}
