import TibiaHighExpServerRankingsKeywordPage, { generateMetadata } from './tibia-high-exp-server-rankings';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaHighExpServerRankingsKeywordPage />;
}
