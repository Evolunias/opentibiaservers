import Tibia14CustomMapPlayersOnlineKeywordPage, { generateMetadata } from './tibia-14-custom-map-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14CustomMapPlayersOnlineKeywordPage />;
}
