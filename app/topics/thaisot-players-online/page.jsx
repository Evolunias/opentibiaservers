import ThaisotPlayersOnlineKeywordPage, { generateMetadata } from './thaisot-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotPlayersOnlineKeywordPage />;
}
