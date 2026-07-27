import Tibia81EvoPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-1-evo-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81EvoPlayersOnlineKeywordPage />;
}
