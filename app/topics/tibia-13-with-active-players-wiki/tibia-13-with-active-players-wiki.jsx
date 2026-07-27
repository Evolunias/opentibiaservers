import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-active-players-wiki');
}

export default function Tibia13WithActivePlayersWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-active-players-wiki" />;
}
