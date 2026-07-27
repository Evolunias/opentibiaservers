import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-discord-players-online');
}

export default function Tibia15WithDiscordPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-discord-players-online" />;
}
