import WithReviewsReviewChileKeywordPage, { generateMetadata } from './with-reviews-review-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsReviewChileKeywordPage />;
}
