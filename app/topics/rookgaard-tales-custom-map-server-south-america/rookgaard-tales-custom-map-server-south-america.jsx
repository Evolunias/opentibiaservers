import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-custom-map-server-south-america');
}

export default function RookgaardTalesCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-custom-map-server-south-america" />;
}
