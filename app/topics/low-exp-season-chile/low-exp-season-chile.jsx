import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-season-chile');
}

export default function LowExpSeasonChileKeywordPage() {
  return <StaticKeywordPage slug="low-exp-season-chile" />;
}
