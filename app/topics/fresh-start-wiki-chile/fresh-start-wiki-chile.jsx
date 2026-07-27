import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-wiki-chile');
}

export default function FreshStartWikiChileKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-wiki-chile" />;
}
