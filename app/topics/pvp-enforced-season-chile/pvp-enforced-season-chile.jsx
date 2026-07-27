import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-season-chile');
}

export default function PvpEnforcedSeasonChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-season-chile" />;
}
