import Tibia13SeasonalReviewKeywordPage, { generateMetadata } from './tibia-13-seasonal-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13SeasonalReviewKeywordPage />;
}
