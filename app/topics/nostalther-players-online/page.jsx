import NostaltherPlayersOnlineKeywordPage, { generateMetadata } from './nostalther-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherPlayersOnlineKeywordPage />;
}
