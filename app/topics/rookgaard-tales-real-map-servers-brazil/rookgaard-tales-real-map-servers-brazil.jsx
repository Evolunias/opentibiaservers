import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-real-map-servers-brazil');
}

export default function RookgaardTalesRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-real-map-servers-brazil" />;
}
