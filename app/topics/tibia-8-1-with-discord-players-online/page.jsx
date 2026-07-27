import Tibia81WithDiscordPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-1-with-discord-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithDiscordPlayersOnlineKeywordPage />;
}
