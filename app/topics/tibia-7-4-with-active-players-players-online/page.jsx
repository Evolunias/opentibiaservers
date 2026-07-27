import Tibia74WithActivePlayersPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-4-with-active-players-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74WithActivePlayersPlayersOnlineKeywordPage />;
}
