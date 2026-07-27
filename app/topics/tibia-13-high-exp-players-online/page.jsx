import Tibia13HighExpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-13-high-exp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13HighExpPlayersOnlineKeywordPage />;
}
