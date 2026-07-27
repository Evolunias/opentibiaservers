import Tibia1098WithActivePlayersPlayersOnlineKeywordPage, { generateMetadata } from './tibia-10-98-with-active-players-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098WithActivePlayersPlayersOnlineKeywordPage />;
}
