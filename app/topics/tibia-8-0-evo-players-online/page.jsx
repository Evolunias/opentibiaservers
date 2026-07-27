import Tibia80EvoPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-0-evo-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80EvoPlayersOnlineKeywordPage />;
}
