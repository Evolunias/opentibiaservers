import Tibia1098SeasonalReviewKeywordPage, { generateMetadata } from './tibia-10-98-seasonal-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098SeasonalReviewKeywordPage />;
}
