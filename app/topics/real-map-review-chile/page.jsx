import RealMapReviewChileKeywordPage, { generateMetadata } from './real-map-review-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapReviewChileKeywordPage />;
}
