import Tibia100PvpReviewKeywordPage, { generateMetadata } from './tibia-10-0-pvp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PvpReviewKeywordPage />;
}
