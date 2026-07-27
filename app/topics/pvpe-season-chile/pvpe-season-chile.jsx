import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-season-chile');
}

export default function PvpeSeasonChileKeywordPage() {
  return <StaticKeywordPage slug="pvpe-season-chile" />;
}
