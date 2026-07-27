import Tibia14WithDiscordPlayersOnlineKeywordPage, { generateMetadata } from './tibia-14-with-discord-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithDiscordPlayersOnlineKeywordPage />;
}
