import SeasonalReviewGermanyKeywordPage, { generateMetadata } from './seasonal-review-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalReviewGermanyKeywordPage />;
}
