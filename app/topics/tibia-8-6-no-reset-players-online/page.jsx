import Tibia86NoResetPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-6-no-reset-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86NoResetPlayersOnlineKeywordPage />;
}
