import Tibia15WithDiscordPlayersOnlineKeywordPage, { generateMetadata } from './tibia-15-with-discord-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithDiscordPlayersOnlineKeywordPage />;
}
