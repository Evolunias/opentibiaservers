import Tibia80NoResetPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-0-no-reset-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80NoResetPlayersOnlineKeywordPage />;
}
