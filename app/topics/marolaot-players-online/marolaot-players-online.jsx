import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-players-online');
}

export default function MarolaotPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="marolaot-players-online" />;
}
