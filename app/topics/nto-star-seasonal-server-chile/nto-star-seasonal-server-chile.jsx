import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-seasonal-server-chile');
}

export default function NtoStarSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="nto-star-seasonal-server-chile" />;
}
