import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-custom-map-server-chile');
}

export default function RookgaardTalesCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-custom-map-server-chile" />;
}
