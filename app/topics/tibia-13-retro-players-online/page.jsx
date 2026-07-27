import Tibia13RetroPlayersOnlineKeywordPage, { generateMetadata } from './tibia-13-retro-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RetroPlayersOnlineKeywordPage />;
}
