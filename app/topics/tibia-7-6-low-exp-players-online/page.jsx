import Tibia76LowExpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-6-low-exp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76LowExpPlayersOnlineKeywordPage />;
}
