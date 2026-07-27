import Tibia100BaiakPlayersOnlineKeywordPage, { generateMetadata } from './tibia-10-0-baiak-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100BaiakPlayersOnlineKeywordPage />;
}
