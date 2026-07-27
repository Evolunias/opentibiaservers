import Tibia81PvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-1-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpPlayersOnlineKeywordPage />;
}
