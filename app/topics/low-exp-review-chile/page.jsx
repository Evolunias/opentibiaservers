import LowExpReviewChileKeywordPage, { generateMetadata } from './low-exp-review-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpReviewChileKeywordPage />;
}
