import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-pvp-enforced-players-online');
}

export default function Tibia80PvpEnforcedPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-pvp-enforced-players-online" />;
}
