import CyntaraPlayersOnlineKeywordPage, { generateMetadata } from './cyntara-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraPlayersOnlineKeywordPage />;
}
