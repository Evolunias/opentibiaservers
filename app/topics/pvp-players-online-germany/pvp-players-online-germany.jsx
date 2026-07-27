import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-players-online-germany');
}

export default function PvpPlayersOnlineGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-players-online-germany" />;
}
