import NoResetReviewChileKeywordPage, { generateMetadata } from './no-reset-review-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetReviewChileKeywordPage />;
}
