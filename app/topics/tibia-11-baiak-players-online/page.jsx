import Tibia11BaiakPlayersOnlineKeywordPage, { generateMetadata } from './tibia-11-baiak-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11BaiakPlayersOnlineKeywordPage />;
}
