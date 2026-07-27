import Tibia13FreshStartPlayersOnlineKeywordPage, { generateMetadata } from './tibia-13-fresh-start-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13FreshStartPlayersOnlineKeywordPage />;
}
