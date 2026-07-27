import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-wiki-usa');
}

export default function WithActivePlayersWikiUsaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-wiki-usa" />;
}
