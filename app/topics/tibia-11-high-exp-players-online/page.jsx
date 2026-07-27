import Tibia11HighExpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-11-high-exp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11HighExpPlayersOnlineKeywordPage />;
}
