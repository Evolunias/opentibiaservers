import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-real-map-servers-chile');
}

export default function RookgaardTalesRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-real-map-servers-chile" />;
}
