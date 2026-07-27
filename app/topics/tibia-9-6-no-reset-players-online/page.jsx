import Tibia96NoResetPlayersOnlineKeywordPage, { generateMetadata } from './tibia-9-6-no-reset-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96NoResetPlayersOnlineKeywordPage />;
}
