import MediviaPlayersOnlineKeywordPage, { generateMetadata } from './medivia-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaPlayersOnlineKeywordPage />;
}
