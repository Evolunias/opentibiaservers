import ShadowcoresWithReviewsServerChileKeywordPage, { generateMetadata } from './shadowcores-with-reviews-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresWithReviewsServerChileKeywordPage />;
}
