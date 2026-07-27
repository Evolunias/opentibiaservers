import RookgaardTalesPlayersOnlineKeywordPage, { generateMetadata } from './rookgaard-tales-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesPlayersOnlineKeywordPage />;
}
