import Tibia74ServerRankingsKeywordPage, { generateMetadata } from './tibia-7-4-server-rankings';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74ServerRankingsKeywordPage />;
}
