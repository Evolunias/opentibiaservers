import AlasteraPlayersOnlineKeywordPage, { generateMetadata } from './alastera-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraPlayersOnlineKeywordPage />;
}
