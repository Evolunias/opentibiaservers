import Tibia100PvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-10-0-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PvpPlayersOnlineKeywordPage />;
}
