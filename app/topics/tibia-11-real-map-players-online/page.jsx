import Tibia11RealMapPlayersOnlineKeywordPage, { generateMetadata } from './tibia-11-real-map-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RealMapPlayersOnlineKeywordPage />;
}
