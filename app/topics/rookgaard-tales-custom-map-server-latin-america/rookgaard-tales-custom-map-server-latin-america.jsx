import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-custom-map-server-latin-america');
}

export default function RookgaardTalesCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-custom-map-server-latin-america" />;
}
