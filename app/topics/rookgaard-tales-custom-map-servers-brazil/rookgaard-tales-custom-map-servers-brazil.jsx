import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-custom-map-servers-brazil');
}

export default function RookgaardTalesCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-custom-map-servers-brazil" />;
}
