import Tibia14NoResetPlayersOnlineKeywordPage, { generateMetadata } from './tibia-14-no-reset-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14NoResetPlayersOnlineKeywordPage />;
}
