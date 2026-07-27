import AmeriaPlayersOnlineKeywordPage, { generateMetadata } from './ameria-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaPlayersOnlineKeywordPage />;
}
