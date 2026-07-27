import FreshStartReviewChileKeywordPage, { generateMetadata } from './fresh-start-review-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartReviewChileKeywordPage />;
}
