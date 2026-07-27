import Tibia12PvpReviewKeywordPage, { generateMetadata } from './tibia-12-pvp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpReviewKeywordPage />;
}
