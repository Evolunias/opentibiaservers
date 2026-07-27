import Tibia15EvoPlayersOnlineKeywordPage, { generateMetadata } from './tibia-15-evo-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15EvoPlayersOnlineKeywordPage />;
}
