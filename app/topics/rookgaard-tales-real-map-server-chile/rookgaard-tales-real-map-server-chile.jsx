import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-real-map-server-chile');
}

export default function RookgaardTalesRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-real-map-server-chile" />;
}
