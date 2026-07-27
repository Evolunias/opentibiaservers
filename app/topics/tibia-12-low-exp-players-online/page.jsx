import Tibia12LowExpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-12-low-exp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12LowExpPlayersOnlineKeywordPage />;
}
