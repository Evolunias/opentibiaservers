import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-wiki-chile');
}

export default function PvpWikiChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-wiki-chile" />;
}
