import Tibia74PvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-4-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74PvpPlayersOnlineKeywordPage />;
}
