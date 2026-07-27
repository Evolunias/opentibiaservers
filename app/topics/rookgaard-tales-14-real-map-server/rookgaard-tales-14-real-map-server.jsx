import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-14-real-map-server');
}

export default function RookgaardTales14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-14-real-map-server" />;
}
