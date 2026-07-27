import TibiamePlayersOnlineKeywordPage, { generateMetadata } from './tibiame-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiamePlayersOnlineKeywordPage />;
}
