import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-wiki-sweden');
}

export default function WithActivePlayersWikiSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-wiki-sweden" />;
}
