import Tibia15FreshStartPlayersOnlineKeywordPage, { generateMetadata } from './tibia-15-fresh-start-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15FreshStartPlayersOnlineKeywordPage />;
}
