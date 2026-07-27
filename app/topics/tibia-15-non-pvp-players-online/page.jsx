import Tibia15NonPvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-15-non-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15NonPvpPlayersOnlineKeywordPage />;
}
