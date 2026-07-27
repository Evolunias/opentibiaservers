import ThorniaWithReviewsServerChileKeywordPage, { generateMetadata } from './thornia-with-reviews-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaWithReviewsServerChileKeywordPage />;
}
