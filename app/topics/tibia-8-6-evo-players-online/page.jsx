import Tibia86EvoPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-6-evo-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86EvoPlayersOnlineKeywordPage />;
}
