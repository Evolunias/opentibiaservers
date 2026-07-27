import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-seasonal-server-chile');
}

export default function ClassickDrakoriaSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-seasonal-server-chile" />;
}
