import Tibia71NoResetPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-1-no-reset-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71NoResetPlayersOnlineKeywordPage />;
}
