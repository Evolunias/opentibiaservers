import Tibia11RetroPlayersOnlineKeywordPage, { generateMetadata } from './tibia-11-retro-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RetroPlayersOnlineKeywordPage />;
}
