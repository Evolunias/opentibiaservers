import Tibia13WithDiscordPlayersOnlineKeywordPage, { generateMetadata } from './tibia-13-with-discord-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithDiscordPlayersOnlineKeywordPage />;
}
