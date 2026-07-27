import Tibia84SeasonalReviewKeywordPage, { generateMetadata } from './tibia-8-4-seasonal-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84SeasonalReviewKeywordPage />;
}
