import Tibia76WithDiscordPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-6-with-discord-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithDiscordPlayersOnlineKeywordPage />;
}
