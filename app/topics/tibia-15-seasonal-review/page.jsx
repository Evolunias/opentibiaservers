import Tibia15SeasonalReviewKeywordPage, { generateMetadata } from './tibia-15-seasonal-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15SeasonalReviewKeywordPage />;
}
