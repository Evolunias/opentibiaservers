import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-wiki-canada');
}

export default function WithActivePlayersWikiCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-wiki-canada" />;
}
