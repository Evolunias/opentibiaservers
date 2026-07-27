import NonPvpReviewChileKeywordPage, { generateMetadata } from './non-pvp-review-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpReviewChileKeywordPage />;
}
