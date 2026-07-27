import Tibia86WithDiscordPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-6-with-discord-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithDiscordPlayersOnlineKeywordPage />;
}
