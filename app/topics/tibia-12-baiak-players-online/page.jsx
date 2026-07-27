import Tibia12BaiakPlayersOnlineKeywordPage, { generateMetadata } from './tibia-12-baiak-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12BaiakPlayersOnlineKeywordPage />;
}
