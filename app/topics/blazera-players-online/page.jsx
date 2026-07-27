import BlazeraPlayersOnlineKeywordPage, { generateMetadata } from './blazera-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraPlayersOnlineKeywordPage />;
}
