import WithReviewsLaunchChileKeywordPage, { generateMetadata } from './with-reviews-launch-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsLaunchChileKeywordPage />;
}
