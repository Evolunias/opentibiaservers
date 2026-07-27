import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-non-pvp-players-online');
}

export default function Tibia80NonPvpPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-non-pvp-players-online" />;
}
