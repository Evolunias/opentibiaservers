import Tibia86RealMapPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-6-real-map-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86RealMapPlayersOnlineKeywordPage />;
}
