import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-players-online-north-america');
}

export default function PvpPlayersOnlineNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-players-online-north-america" />;
}
