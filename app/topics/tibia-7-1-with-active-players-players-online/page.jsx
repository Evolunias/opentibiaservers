import Tibia71WithActivePlayersPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-1-with-active-players-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithActivePlayersPlayersOnlineKeywordPage />;
}
