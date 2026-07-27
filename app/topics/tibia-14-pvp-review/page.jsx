import Tibia14PvpReviewKeywordPage, { generateMetadata } from './tibia-14-pvp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpReviewKeywordPage />;
}
