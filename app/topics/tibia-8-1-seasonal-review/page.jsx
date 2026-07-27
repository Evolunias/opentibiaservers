import Tibia81SeasonalReviewKeywordPage, { generateMetadata } from './tibia-8-1-seasonal-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81SeasonalReviewKeywordPage />;
}
