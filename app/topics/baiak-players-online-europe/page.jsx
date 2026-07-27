import BaiakPlayersOnlineEuropeKeywordPage, { generateMetadata } from './baiak-players-online-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakPlayersOnlineEuropeKeywordPage />;
}
