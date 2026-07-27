import WithReviewsReviewBrazilKeywordPage, { generateMetadata } from './with-reviews-review-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsReviewBrazilKeywordPage />;
}
