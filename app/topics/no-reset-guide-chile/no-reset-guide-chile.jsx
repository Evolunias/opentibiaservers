import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-guide-chile');
}

export default function NoResetGuideChileKeywordPage() {
  return <StaticKeywordPage slug="no-reset-guide-chile" />;
}
