import Tibia11WithActivePlayersPlayersOnlineKeywordPage, { generateMetadata } from './tibia-11-with-active-players-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithActivePlayersPlayersOnlineKeywordPage />;
}
