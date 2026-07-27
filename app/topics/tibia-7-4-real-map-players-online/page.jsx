import Tibia74RealMapPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-4-real-map-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74RealMapPlayersOnlineKeywordPage />;
}
