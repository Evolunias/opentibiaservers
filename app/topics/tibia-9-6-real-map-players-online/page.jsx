import Tibia96RealMapPlayersOnlineKeywordPage, { generateMetadata } from './tibia-9-6-real-map-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96RealMapPlayersOnlineKeywordPage />;
}
