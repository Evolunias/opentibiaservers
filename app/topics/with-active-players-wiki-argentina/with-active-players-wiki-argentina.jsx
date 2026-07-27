import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-wiki-argentina');
}

export default function WithActivePlayersWikiArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-wiki-argentina" />;
}
