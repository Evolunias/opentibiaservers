import SeasonalReviewEuropeKeywordPage, { generateMetadata } from './seasonal-review-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalReviewEuropeKeywordPage />;
}
