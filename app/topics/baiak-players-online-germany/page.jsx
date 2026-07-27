import BaiakPlayersOnlineGermanyKeywordPage, { generateMetadata } from './baiak-players-online-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakPlayersOnlineGermanyKeywordPage />;
}
