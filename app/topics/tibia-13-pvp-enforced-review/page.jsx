import Tibia13PvpEnforcedReviewKeywordPage, { generateMetadata } from './tibia-13-pvp-enforced-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpEnforcedReviewKeywordPage />;
}
