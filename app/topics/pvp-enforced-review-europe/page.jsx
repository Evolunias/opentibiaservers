import PvpEnforcedReviewEuropeKeywordPage, { generateMetadata } from './pvp-enforced-review-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedReviewEuropeKeywordPage />;
}
