import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-wiki-chile');
}

export default function LowExpWikiChileKeywordPage() {
  return <StaticKeywordPage slug="low-exp-wiki-chile" />;
}
