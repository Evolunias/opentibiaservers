import Tibia96CustomMapPlayersOnlineKeywordPage, { generateMetadata } from './tibia-9-6-custom-map-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96CustomMapPlayersOnlineKeywordPage />;
}
