import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-wiki-chile');
}

export default function WithActivePlayersWikiChileKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-wiki-chile" />;
}
