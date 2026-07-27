import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-wiki-uk');
}

export default function WithActivePlayersWikiUkKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-wiki-uk" />;
}
