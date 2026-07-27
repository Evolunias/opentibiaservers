import Tibia12FreshStartPlayersOnlineKeywordPage, { generateMetadata } from './tibia-12-fresh-start-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12FreshStartPlayersOnlineKeywordPage />;
}
