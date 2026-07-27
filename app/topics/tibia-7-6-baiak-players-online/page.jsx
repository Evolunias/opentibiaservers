import Tibia76BaiakPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-6-baiak-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76BaiakPlayersOnlineKeywordPage />;
}
