import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-14-custom-map-server');
}

export default function RookgaardTales14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-14-custom-map-server" />;
}
