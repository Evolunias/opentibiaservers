import Tibia13CustomMapPlayersOnlineKeywordPage, { generateMetadata } from './tibia-13-custom-map-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13CustomMapPlayersOnlineKeywordPage />;
}
