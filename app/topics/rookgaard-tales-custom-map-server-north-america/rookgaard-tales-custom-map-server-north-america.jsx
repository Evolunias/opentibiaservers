import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-custom-map-server-north-america');
}

export default function RookgaardTalesCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-custom-map-server-north-america" />;
}
