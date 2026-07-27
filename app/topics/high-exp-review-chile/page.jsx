import HighExpReviewChileKeywordPage, { generateMetadata } from './high-exp-review-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpReviewChileKeywordPage />;
}
