import Tibia81BaiakPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-1-baiak-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81BaiakPlayersOnlineKeywordPage />;
}
