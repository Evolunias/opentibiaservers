import WithReviewsReviewUkKeywordPage, { generateMetadata } from './with-reviews-review-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsReviewUkKeywordPage />;
}
