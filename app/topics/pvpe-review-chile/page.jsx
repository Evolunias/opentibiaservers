import PvpeReviewChileKeywordPage, { generateMetadata } from './pvpe-review-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeReviewChileKeywordPage />;
}
