import Tibia84CustomMapPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-4-custom-map-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84CustomMapPlayersOnlineKeywordPage />;
}
