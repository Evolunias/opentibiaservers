import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-wiki-south-america');
}

export default function WithActivePlayersWikiSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-wiki-south-america" />;
}
