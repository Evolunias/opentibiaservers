import Tibia100LowExpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-10-0-low-exp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100LowExpPlayersOnlineKeywordPage />;
}
