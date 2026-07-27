import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-retro-players-online');
}

export default function Tibia13RetroPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-retro-players-online" />;
}
