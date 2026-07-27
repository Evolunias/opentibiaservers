import ElderaPlayersOnlineKeywordPage, { generateMetadata } from './eldera-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaPlayersOnlineKeywordPage />;
}
