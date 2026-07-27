import BaiakPlayersOnlineArgentinaKeywordPage, { generateMetadata } from './baiak-players-online-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakPlayersOnlineArgentinaKeywordPage />;
}
