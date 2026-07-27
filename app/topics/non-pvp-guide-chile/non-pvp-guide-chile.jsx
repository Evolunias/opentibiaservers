import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-guide-chile');
}

export default function NonPvpGuideChileKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-guide-chile" />;
}
