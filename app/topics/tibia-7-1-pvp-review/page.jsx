import Tibia71PvpReviewKeywordPage, { generateMetadata } from './tibia-7-1-pvp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpReviewKeywordPage />;
}
