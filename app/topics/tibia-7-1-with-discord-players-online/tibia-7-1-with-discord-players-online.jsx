import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-discord-players-online');
}

export default function Tibia71WithDiscordPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-discord-players-online" />;
}
