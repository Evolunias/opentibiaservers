import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-wiki-latin-america');
}

export default function WithActivePlayersWikiLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-wiki-latin-america" />;
}
