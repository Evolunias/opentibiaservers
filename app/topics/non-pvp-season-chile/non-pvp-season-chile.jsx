import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-season-chile');
}

export default function NonPvpSeasonChileKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-season-chile" />;
}
