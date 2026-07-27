import Tibia13WithActivePlayersPlayersOnlineKeywordPage, { generateMetadata } from './tibia-13-with-active-players-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithActivePlayersPlayersOnlineKeywordPage />;
}
