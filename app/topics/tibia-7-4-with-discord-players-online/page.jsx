import Tibia74WithDiscordPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-4-with-discord-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74WithDiscordPlayersOnlineKeywordPage />;
}
