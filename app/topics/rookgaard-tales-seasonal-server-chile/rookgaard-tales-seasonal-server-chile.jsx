import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-seasonal-server-chile');
}

export default function RookgaardTalesSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-seasonal-server-chile" />;
}
