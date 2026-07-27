import Tibia13BaiakPlayersOnlineKeywordPage, { generateMetadata } from './tibia-13-baiak-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13BaiakPlayersOnlineKeywordPage />;
}
