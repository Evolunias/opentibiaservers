import Tibia12WithActivePlayersPlayersOnlineKeywordPage, { generateMetadata } from './tibia-12-with-active-players-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithActivePlayersPlayersOnlineKeywordPage />;
}
