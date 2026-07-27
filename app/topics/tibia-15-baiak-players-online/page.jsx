import Tibia15BaiakPlayersOnlineKeywordPage, { generateMetadata } from './tibia-15-baiak-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15BaiakPlayersOnlineKeywordPage />;
}
