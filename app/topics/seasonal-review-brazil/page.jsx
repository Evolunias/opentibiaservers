import SeasonalReviewBrazilKeywordPage, { generateMetadata } from './seasonal-review-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalReviewBrazilKeywordPage />;
}
