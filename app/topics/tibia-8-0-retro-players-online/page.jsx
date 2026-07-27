import Tibia80RetroPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-0-retro-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80RetroPlayersOnlineKeywordPage />;
}
