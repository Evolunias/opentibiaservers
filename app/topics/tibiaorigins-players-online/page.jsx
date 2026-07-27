import TibiaoriginsPlayersOnlineKeywordPage, { generateMetadata } from './tibiaorigins-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsPlayersOnlineKeywordPage />;
}
