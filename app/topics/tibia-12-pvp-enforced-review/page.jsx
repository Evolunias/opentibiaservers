import Tibia12PvpEnforcedReviewKeywordPage, { generateMetadata } from './tibia-12-pvp-enforced-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpEnforcedReviewKeywordPage />;
}
