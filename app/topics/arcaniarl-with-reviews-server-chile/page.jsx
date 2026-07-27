import ArcaniarlWithReviewsServerChileKeywordPage, { generateMetadata } from './arcaniarl-with-reviews-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlWithReviewsServerChileKeywordPage />;
}
