import BaiakServerRankingsKeywordPage, { generateMetadata } from './baiak-server-rankings';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServerRankingsKeywordPage />;
}
