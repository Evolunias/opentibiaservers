import Tibia12EvoPlayersOnlineKeywordPage, { generateMetadata } from './tibia-12-evo-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12EvoPlayersOnlineKeywordPage />;
}
