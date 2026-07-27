import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-custom-map-servers-chile');
}

export default function RookgaardTalesCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-custom-map-servers-chile" />;
}
