import Tibia12NoResetPlayersOnlineKeywordPage, { generateMetadata } from './tibia-12-no-reset-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12NoResetPlayersOnlineKeywordPage />;
}
