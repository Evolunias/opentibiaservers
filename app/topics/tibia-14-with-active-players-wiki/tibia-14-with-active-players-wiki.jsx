import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-active-players-wiki');
}

export default function Tibia14WithActivePlayersWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-active-players-wiki" />;
}
