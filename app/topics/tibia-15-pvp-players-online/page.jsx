import Tibia15PvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-15-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpPlayersOnlineKeywordPage />;
}
