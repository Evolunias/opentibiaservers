import Tibia84WithActivePlayersPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-4-with-active-players-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithActivePlayersPlayersOnlineKeywordPage />;
}
