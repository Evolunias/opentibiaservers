import Tibia14RealMapPlayersOnlineKeywordPage, { generateMetadata } from './tibia-14-real-map-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14RealMapPlayersOnlineKeywordPage />;
}
