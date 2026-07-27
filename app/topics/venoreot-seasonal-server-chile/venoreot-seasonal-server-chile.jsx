import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-seasonal-server-chile');
}

export default function VenoreotSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="venoreot-seasonal-server-chile" />;
}
