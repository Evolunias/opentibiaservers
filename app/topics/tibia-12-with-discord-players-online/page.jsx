import Tibia12WithDiscordPlayersOnlineKeywordPage, { generateMetadata } from './tibia-12-with-discord-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithDiscordPlayersOnlineKeywordPage />;
}
