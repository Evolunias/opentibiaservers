import PvpeServerRankingsKeywordPage, { generateMetadata } from './pvpe-server-rankings';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServerRankingsKeywordPage />;
}
