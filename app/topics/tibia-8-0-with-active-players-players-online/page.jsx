import Tibia80WithActivePlayersPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-0-with-active-players-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithActivePlayersPlayersOnlineKeywordPage />;
}
