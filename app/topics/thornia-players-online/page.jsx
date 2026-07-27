import ThorniaPlayersOnlineKeywordPage, { generateMetadata } from './thornia-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaPlayersOnlineKeywordPage />;
}
