import RealestaPlayersOnlineKeywordPage, { generateMetadata } from './realesta-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaPlayersOnlineKeywordPage />;
}
