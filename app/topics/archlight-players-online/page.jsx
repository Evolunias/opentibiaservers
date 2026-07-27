import ArchlightPlayersOnlineKeywordPage, { generateMetadata } from './archlight-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightPlayersOnlineKeywordPage />;
}
