import Tibia14WithActivePlayersPlayersOnlineKeywordPage, { generateMetadata } from './tibia-14-with-active-players-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithActivePlayersPlayersOnlineKeywordPage />;
}
