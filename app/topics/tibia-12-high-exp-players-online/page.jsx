import Tibia12HighExpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-12-high-exp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12HighExpPlayersOnlineKeywordPage />;
}
