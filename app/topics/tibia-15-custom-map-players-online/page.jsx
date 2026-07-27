import Tibia15CustomMapPlayersOnlineKeywordPage, { generateMetadata } from './tibia-15-custom-map-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15CustomMapPlayersOnlineKeywordPage />;
}
