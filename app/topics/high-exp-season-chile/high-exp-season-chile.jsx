import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-season-chile');
}

export default function HighExpSeasonChileKeywordPage() {
  return <StaticKeywordPage slug="high-exp-season-chile" />;
}
