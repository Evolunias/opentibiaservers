import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-7-72-custom-map-server');
}

export default function RookgaardTales772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-7-72-custom-map-server" />;
}
