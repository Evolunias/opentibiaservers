import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-season-chile');
}

export default function NoResetSeasonChileKeywordPage() {
  return <StaticKeywordPage slug="no-reset-season-chile" />;
}
