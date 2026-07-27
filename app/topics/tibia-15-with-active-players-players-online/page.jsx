import Tibia15WithActivePlayersPlayersOnlineKeywordPage, { generateMetadata } from './tibia-15-with-active-players-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithActivePlayersPlayersOnlineKeywordPage />;
}
