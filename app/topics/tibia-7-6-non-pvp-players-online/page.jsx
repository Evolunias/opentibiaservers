import Tibia76NonPvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-6-non-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76NonPvpPlayersOnlineKeywordPage />;
}
