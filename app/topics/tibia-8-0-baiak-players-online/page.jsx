import Tibia80BaiakPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-0-baiak-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80BaiakPlayersOnlineKeywordPage />;
}
