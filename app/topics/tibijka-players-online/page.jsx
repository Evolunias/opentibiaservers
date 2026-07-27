import TibijkaPlayersOnlineKeywordPage, { generateMetadata } from './tibijka-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaPlayersOnlineKeywordPage />;
}
