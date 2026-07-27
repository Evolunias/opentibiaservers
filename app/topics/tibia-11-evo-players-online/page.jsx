import Tibia11EvoPlayersOnlineKeywordPage, { generateMetadata } from './tibia-11-evo-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11EvoPlayersOnlineKeywordPage />;
}
