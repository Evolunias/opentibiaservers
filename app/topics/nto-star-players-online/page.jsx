import NtoStarPlayersOnlineKeywordPage, { generateMetadata } from './nto-star-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarPlayersOnlineKeywordPage />;
}
