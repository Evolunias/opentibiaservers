import Tibia71PvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-1-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpPlayersOnlineKeywordPage />;
}
