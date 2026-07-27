import Tibia100WithActivePlayersPlayersOnlineKeywordPage, { generateMetadata } from './tibia-10-0-with-active-players-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithActivePlayersPlayersOnlineKeywordPage />;
}
