import TibiascapePlayersOnlineKeywordPage, { generateMetadata } from './tibiascape-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapePlayersOnlineKeywordPage />;
}
