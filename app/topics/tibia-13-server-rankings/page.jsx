import Tibia13ServerRankingsKeywordPage, { generateMetadata } from './tibia-13-server-rankings';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13ServerRankingsKeywordPage />;
}
