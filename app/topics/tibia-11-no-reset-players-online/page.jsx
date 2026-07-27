import Tibia11NoResetPlayersOnlineKeywordPage, { generateMetadata } from './tibia-11-no-reset-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11NoResetPlayersOnlineKeywordPage />;
}
