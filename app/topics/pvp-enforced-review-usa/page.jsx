import PvpEnforcedReviewUsaKeywordPage, { generateMetadata } from './pvp-enforced-review-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedReviewUsaKeywordPage />;
}
