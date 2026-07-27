import Tibia100NonPvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-10-0-non-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100NonPvpPlayersOnlineKeywordPage />;
}
