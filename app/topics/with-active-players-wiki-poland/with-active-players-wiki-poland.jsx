import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-wiki-poland');
}

export default function WithActivePlayersWikiPolandKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-wiki-poland" />;
}
