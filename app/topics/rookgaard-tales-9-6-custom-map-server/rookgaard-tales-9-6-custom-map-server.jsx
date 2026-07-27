import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-9-6-custom-map-server');
}

export default function RookgaardTales96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-9-6-custom-map-server" />;
}
