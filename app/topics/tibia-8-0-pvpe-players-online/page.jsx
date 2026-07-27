import Tibia80PvpePlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-0-pvpe-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpePlayersOnlineKeywordPage />;
}
