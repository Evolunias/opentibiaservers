import Tibia12NonPvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-12-non-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12NonPvpPlayersOnlineKeywordPage />;
}
