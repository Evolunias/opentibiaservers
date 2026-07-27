import Tibia76CustomMapPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-6-custom-map-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76CustomMapPlayersOnlineKeywordPage />;
}
