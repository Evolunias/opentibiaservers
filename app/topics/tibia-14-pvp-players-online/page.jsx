import Tibia14PvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-14-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpPlayersOnlineKeywordPage />;
}
