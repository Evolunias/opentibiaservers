import Tibia11CustomMapPlayersOnlineKeywordPage, { generateMetadata } from './tibia-11-custom-map-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11CustomMapPlayersOnlineKeywordPage />;
}
