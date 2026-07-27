import VenoreotPlayersOnlineKeywordPage, { generateMetadata } from './venoreot-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotPlayersOnlineKeywordPage />;
}
