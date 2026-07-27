import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-players-online-latin-america');
}

export default function PvpPlayersOnlineLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-players-online-latin-america" />;
}
