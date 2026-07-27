import Tibia86WithActivePlayersPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-6-with-active-players-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithActivePlayersPlayersOnlineKeywordPage />;
}
