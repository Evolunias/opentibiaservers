import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-seasonal-server-chile');
}

export default function SaintsotSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="saintsot-seasonal-server-chile" />;
}
