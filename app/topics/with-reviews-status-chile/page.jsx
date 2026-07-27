import WithReviewsStatusChileKeywordPage, { generateMetadata } from './with-reviews-status-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsStatusChileKeywordPage />;
}
