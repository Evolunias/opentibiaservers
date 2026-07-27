import OxygenotPlayersOnlineKeywordPage, { generateMetadata } from './oxygenot-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotPlayersOnlineKeywordPage />;
}
