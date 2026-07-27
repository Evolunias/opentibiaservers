import BaiakReviewChileKeywordPage, { generateMetadata } from './baiak-review-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakReviewChileKeywordPage />;
}
