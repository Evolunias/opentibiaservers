import Tibia12PvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-12-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpPlayersOnlineKeywordPage />;
}
