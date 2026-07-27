import MistOfDeathPlayersOnlineKeywordPage, { generateMetadata } from './mist-of-death-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathPlayersOnlineKeywordPage />;
}
