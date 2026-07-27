import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-wiki-germany');
}

export default function WithActivePlayersWikiGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-wiki-germany" />;
}
