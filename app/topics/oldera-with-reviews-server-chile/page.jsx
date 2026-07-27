import OlderaWithReviewsServerChileKeywordPage, { generateMetadata } from './oldera-with-reviews-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaWithReviewsServerChileKeywordPage />;
}
