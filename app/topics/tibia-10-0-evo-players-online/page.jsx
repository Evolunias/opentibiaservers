import Tibia100EvoPlayersOnlineKeywordPage, { generateMetadata } from './tibia-10-0-evo-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100EvoPlayersOnlineKeywordPage />;
}
