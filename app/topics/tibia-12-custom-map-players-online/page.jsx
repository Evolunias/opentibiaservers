import Tibia12CustomMapPlayersOnlineKeywordPage, { generateMetadata } from './tibia-12-custom-map-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12CustomMapPlayersOnlineKeywordPage />;
}
