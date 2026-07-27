import Tibia100WithDiscordPlayersOnlineKeywordPage, { generateMetadata } from './tibia-10-0-with-discord-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithDiscordPlayersOnlineKeywordPage />;
}
