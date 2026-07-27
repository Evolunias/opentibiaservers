import PvpEnforcedReviewChileKeywordPage, { generateMetadata } from './pvp-enforced-review-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedReviewChileKeywordPage />;
}
