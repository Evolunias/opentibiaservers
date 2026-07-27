import CanobPlayersOnlineKeywordPage, { generateMetadata } from './canob-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobPlayersOnlineKeywordPage />;
}
