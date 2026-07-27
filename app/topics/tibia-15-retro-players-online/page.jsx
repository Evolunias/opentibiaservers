import Tibia15RetroPlayersOnlineKeywordPage, { generateMetadata } from './tibia-15-retro-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RetroPlayersOnlineKeywordPage />;
}
