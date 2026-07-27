import Tibia76NoResetPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-6-no-reset-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76NoResetPlayersOnlineKeywordPage />;
}
