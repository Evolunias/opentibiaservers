import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-active-players-wiki');
}

export default function Tibia11WithActivePlayersWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-active-players-wiki" />;
}
