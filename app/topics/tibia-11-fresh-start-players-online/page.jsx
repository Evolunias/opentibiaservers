import Tibia11FreshStartPlayersOnlineKeywordPage, { generateMetadata } from './tibia-11-fresh-start-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11FreshStartPlayersOnlineKeywordPage />;
}
