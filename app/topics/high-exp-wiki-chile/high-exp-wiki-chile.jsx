import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-wiki-chile');
}

export default function HighExpWikiChileKeywordPage() {
  return <StaticKeywordPage slug="high-exp-wiki-chile" />;
}
