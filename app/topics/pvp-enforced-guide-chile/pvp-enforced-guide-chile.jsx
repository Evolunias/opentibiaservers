import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-guide-chile');
}

export default function PvpEnforcedGuideChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-guide-chile" />;
}
