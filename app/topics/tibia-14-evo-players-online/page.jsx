import Tibia14EvoPlayersOnlineKeywordPage, { generateMetadata } from './tibia-14-evo-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14EvoPlayersOnlineKeywordPage />;
}
