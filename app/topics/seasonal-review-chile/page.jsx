import SeasonalReviewChileKeywordPage, { generateMetadata } from './seasonal-review-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalReviewChileKeywordPage />;
}
