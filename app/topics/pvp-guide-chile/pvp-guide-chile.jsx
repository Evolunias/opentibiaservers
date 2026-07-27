import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-guide-chile');
}

export default function PvpGuideChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-guide-chile" />;
}
