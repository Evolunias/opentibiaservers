import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-with-discord-players-online');
}

export default function Tibia772WithDiscordPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-with-discord-players-online" />;
}
