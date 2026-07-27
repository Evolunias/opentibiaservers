import Tibia14NonPvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-14-non-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14NonPvpPlayersOnlineKeywordPage />;
}
