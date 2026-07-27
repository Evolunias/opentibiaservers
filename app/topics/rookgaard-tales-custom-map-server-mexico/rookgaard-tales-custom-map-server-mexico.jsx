import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-custom-map-server-mexico');
}

export default function RookgaardTalesCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-custom-map-server-mexico" />;
}
