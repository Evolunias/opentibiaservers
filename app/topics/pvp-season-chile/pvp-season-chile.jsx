import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-season-chile');
}

export default function PvpSeasonChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-season-chile" />;
}
