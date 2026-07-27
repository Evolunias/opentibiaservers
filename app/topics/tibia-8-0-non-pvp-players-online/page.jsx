import Tibia80NonPvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-0-non-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80NonPvpPlayersOnlineKeywordPage />;
}
