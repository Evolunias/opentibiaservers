import Tibia74PvpePlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-4-pvpe-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74PvpePlayersOnlineKeywordPage />;
}
