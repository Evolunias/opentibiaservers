import BaiakPlayersOnlineSwedenKeywordPage, { generateMetadata } from './baiak-players-online-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakPlayersOnlineSwedenKeywordPage />;
}
