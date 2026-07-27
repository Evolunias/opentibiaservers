import PvpEnforcedReviewSwedenKeywordPage, { generateMetadata } from './pvp-enforced-review-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedReviewSwedenKeywordPage />;
}
