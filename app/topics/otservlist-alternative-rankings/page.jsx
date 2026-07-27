import OtservlistAlternativeRankingsKeywordPage, { generateMetadata } from './otservlist-alternative-rankings';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistAlternativeRankingsKeywordPage />;
}
