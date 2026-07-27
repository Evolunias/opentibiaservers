import ImperianicPlayersOnlineKeywordPage, { generateMetadata } from './imperianic-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicPlayersOnlineKeywordPage />;
}
