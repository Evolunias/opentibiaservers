import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-wiki-north-america');
}

export default function WithActivePlayersWikiNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-wiki-north-america" />;
}
