import TibiascapeWithReviewsServerChileKeywordPage, { generateMetadata } from './tibiascape-with-reviews-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeWithReviewsServerChileKeywordPage />;
}
