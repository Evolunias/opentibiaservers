import Tibia14BaiakPlayersOnlineKeywordPage, { generateMetadata } from './tibia-14-baiak-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14BaiakPlayersOnlineKeywordPage />;
}
