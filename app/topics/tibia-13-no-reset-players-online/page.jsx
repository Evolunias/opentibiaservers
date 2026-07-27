import Tibia13NoResetPlayersOnlineKeywordPage, { generateMetadata } from './tibia-13-no-reset-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13NoResetPlayersOnlineKeywordPage />;
}
