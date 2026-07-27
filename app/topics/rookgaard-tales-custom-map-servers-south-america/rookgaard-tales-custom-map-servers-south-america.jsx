import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-custom-map-servers-south-america');
}

export default function RookgaardTalesCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-custom-map-servers-south-america" />;
}
