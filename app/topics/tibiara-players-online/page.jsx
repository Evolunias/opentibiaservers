import TibiaraPlayersOnlineKeywordPage, { generateMetadata } from './tibiara-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraPlayersOnlineKeywordPage />;
}
