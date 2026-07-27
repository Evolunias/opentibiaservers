import Tibia71CustomMapPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-1-custom-map-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71CustomMapPlayersOnlineKeywordPage />;
}
