import Tibia1098ServerRankingsKeywordPage, { generateMetadata } from './tibia-10-98-server-rankings';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098ServerRankingsKeywordPage />;
}
