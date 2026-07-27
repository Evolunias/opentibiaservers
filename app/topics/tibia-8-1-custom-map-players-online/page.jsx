import Tibia81CustomMapPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-1-custom-map-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81CustomMapPlayersOnlineKeywordPage />;
}
