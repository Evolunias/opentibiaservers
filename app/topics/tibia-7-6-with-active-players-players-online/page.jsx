import Tibia76WithActivePlayersPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-6-with-active-players-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithActivePlayersPlayersOnlineKeywordPage />;
}
