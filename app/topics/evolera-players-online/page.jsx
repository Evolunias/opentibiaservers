import EvoleraPlayersOnlineKeywordPage, { generateMetadata } from './evolera-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraPlayersOnlineKeywordPage />;
}
