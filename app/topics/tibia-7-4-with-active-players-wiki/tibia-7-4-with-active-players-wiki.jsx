import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-active-players-wiki');
}

export default function Tibia74WithActivePlayersWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-active-players-wiki" />;
}
