import LumineraWithReviewsServerChileKeywordPage, { generateMetadata } from './luminera-with-reviews-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraWithReviewsServerChileKeywordPage />;
}
