import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-guide-chile');
}

export default function FreshStartGuideChileKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-guide-chile" />;
}
