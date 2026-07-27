import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-custom-map-server-brazil');
}

export default function RookgaardTalesCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-custom-map-server-brazil" />;
}
