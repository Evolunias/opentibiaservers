import SeasonalReviewUkKeywordPage, { generateMetadata } from './seasonal-review-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalReviewUkKeywordPage />;
}
