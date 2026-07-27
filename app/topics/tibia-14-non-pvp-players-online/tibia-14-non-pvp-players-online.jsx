import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-non-pvp-players-online');
}

export default function Tibia14NonPvpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-non-pvp-players-online" />;
}
