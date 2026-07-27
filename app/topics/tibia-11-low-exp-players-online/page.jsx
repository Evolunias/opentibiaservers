import Tibia11LowExpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-11-low-exp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11LowExpPlayersOnlineKeywordPage />;
}
