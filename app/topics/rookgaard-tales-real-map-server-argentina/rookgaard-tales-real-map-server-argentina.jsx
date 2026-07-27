import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-real-map-server-argentina');
}

export default function RookgaardTalesRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-real-map-server-argentina" />;
}
