import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-custom-map-servers-mexico');
}

export default function RookgaardTalesCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-custom-map-servers-mexico" />;
}
