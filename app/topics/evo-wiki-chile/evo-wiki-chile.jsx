import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-wiki-chile');
}

export default function EvoWikiChileKeywordPage() {
  return <StaticKeywordPage slug="evo-wiki-chile" />;
}
