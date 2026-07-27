import Tibia12SeasonalReviewKeywordPage, { generateMetadata } from './tibia-12-seasonal-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12SeasonalReviewKeywordPage />;
}
