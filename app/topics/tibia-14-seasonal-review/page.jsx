import Tibia14SeasonalReviewKeywordPage, { generateMetadata } from './tibia-14-seasonal-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14SeasonalReviewKeywordPage />;
}
