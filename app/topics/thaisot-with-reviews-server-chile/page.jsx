import ThaisotWithReviewsServerChileKeywordPage, { generateMetadata } from './thaisot-with-reviews-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotWithReviewsServerChileKeywordPage />;
}
