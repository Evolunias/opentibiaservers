import OtlandRankingsKeywordPage, { generateMetadata } from './otland-rankings';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandRankingsKeywordPage />;
}
