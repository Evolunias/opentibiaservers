import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-players-online-poland');
}

export default function PvpPlayersOnlinePolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-players-online-poland" />;
}
