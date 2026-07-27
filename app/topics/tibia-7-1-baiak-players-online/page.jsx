import Tibia71BaiakPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-1-baiak-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71BaiakPlayersOnlineKeywordPage />;
}
