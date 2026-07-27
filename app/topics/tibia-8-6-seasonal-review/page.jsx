import Tibia86SeasonalReviewKeywordPage, { generateMetadata } from './tibia-8-6-seasonal-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86SeasonalReviewKeywordPage />;
}
