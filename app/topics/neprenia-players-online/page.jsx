import NepreniaPlayersOnlineKeywordPage, { generateMetadata } from './neprenia-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaPlayersOnlineKeywordPage />;
}
