import Tibia80WithDiscordPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-0-with-discord-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithDiscordPlayersOnlineKeywordPage />;
}
