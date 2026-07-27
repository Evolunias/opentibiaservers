import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-0-custom-map-server');
}

export default function RookgaardTales80CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-0-custom-map-server" />;
}
