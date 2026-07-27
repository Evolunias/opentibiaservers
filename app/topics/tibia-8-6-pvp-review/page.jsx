import Tibia86PvpReviewKeywordPage, { generateMetadata } from './tibia-8-6-pvp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpReviewKeywordPage />;
}
