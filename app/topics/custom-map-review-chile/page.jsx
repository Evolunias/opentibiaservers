import CustomMapReviewChileKeywordPage, { generateMetadata } from './custom-map-review-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapReviewChileKeywordPage />;
}
