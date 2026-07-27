import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-custom-map-servers-north-america');
}

export default function RookgaardTalesCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-custom-map-servers-north-america" />;
}
