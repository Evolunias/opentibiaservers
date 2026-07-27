import PvpEnforcedReviewPolandKeywordPage, { generateMetadata } from './pvp-enforced-review-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedReviewPolandKeywordPage />;
}
