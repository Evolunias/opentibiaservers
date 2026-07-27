import Tibia100NoResetPlayersOnlineKeywordPage, { generateMetadata } from './tibia-10-0-no-reset-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100NoResetPlayersOnlineKeywordPage />;
}
