import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-players-online-canada');
}

export default function PvpPlayersOnlineCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-players-online-canada" />;
}
