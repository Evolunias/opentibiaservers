import WithReviewsGuideChileKeywordPage, { generateMetadata } from './with-reviews-guide-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsGuideChileKeywordPage />;
}
