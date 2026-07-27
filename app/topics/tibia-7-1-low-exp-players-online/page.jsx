import Tibia71LowExpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-1-low-exp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71LowExpPlayersOnlineKeywordPage />;
}
