import PvpEnforcedReviewUkKeywordPage, { generateMetadata } from './pvp-enforced-review-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedReviewUkKeywordPage />;
}
