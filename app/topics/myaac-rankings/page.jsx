import MyaacRankingsKeywordPage, { generateMetadata } from './myaac-rankings';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MyaacRankingsKeywordPage />;
}
