import NilotWithReviewsServerChileKeywordPage, { generateMetadata } from './nilot-with-reviews-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotWithReviewsServerChileKeywordPage />;
}
