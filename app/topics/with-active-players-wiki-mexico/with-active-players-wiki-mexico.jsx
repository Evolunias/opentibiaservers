import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-wiki-mexico');
}

export default function WithActivePlayersWikiMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-wiki-mexico" />;
}
