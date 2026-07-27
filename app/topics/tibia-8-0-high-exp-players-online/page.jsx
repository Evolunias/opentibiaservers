import Tibia80HighExpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-0-high-exp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80HighExpPlayersOnlineKeywordPage />;
}
