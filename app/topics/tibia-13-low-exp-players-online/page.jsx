import Tibia13LowExpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-13-low-exp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13LowExpPlayersOnlineKeywordPage />;
}
