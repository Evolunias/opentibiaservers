import Tibia81WithActivePlayersPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-1-with-active-players-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithActivePlayersPlayersOnlineKeywordPage />;
}
