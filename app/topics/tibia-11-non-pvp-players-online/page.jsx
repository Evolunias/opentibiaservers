import Tibia11NonPvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-11-non-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11NonPvpPlayersOnlineKeywordPage />;
}
