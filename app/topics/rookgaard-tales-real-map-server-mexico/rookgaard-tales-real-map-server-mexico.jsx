import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-real-map-server-mexico');
}

export default function RookgaardTalesRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-real-map-server-mexico" />;
}
