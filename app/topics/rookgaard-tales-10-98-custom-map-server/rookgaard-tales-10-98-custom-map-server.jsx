import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-10-98-custom-map-server');
}

export default function RookgaardTales1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-10-98-custom-map-server" />;
}
