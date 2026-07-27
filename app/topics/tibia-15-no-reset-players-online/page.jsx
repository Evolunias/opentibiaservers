import Tibia15NoResetPlayersOnlineKeywordPage, { generateMetadata } from './tibia-15-no-reset-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15NoResetPlayersOnlineKeywordPage />;
}
