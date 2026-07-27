import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-real-map-server-brazil');
}

export default function RookgaardTalesRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-real-map-server-brazil" />;
}
