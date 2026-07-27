import MediviaWithReviewsServerChileKeywordPage, { generateMetadata } from './medivia-with-reviews-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaWithReviewsServerChileKeywordPage />;
}
