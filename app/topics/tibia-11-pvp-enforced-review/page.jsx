import Tibia11PvpEnforcedReviewKeywordPage, { generateMetadata } from './tibia-11-pvp-enforced-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpEnforcedReviewKeywordPage />;
}
