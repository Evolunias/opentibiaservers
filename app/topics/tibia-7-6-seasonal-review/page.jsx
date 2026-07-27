import Tibia76SeasonalReviewKeywordPage, { generateMetadata } from './tibia-7-6-seasonal-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76SeasonalReviewKeywordPage />;
}
