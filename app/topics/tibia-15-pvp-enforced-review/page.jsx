import Tibia15PvpEnforcedReviewKeywordPage, { generateMetadata } from './tibia-15-pvp-enforced-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpEnforcedReviewKeywordPage />;
}
