import Tibia11PvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-11-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpPlayersOnlineKeywordPage />;
}
