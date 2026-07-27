import Tibia100CustomMapPlayersOnlineKeywordPage, { generateMetadata } from './tibia-10-0-custom-map-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100CustomMapPlayersOnlineKeywordPage />;
}
