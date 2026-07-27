import Tibia1098PvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-10-98-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098PvpPlayersOnlineKeywordPage />;
}
