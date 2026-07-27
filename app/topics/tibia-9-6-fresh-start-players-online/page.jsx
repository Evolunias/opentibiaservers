import Tibia96FreshStartPlayersOnlineKeywordPage, { generateMetadata } from './tibia-9-6-fresh-start-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96FreshStartPlayersOnlineKeywordPage />;
}
