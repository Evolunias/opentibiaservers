import Tibia772NonPvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-72-non-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772NonPvpPlayersOnlineKeywordPage />;
}
