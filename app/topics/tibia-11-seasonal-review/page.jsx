import Tibia11SeasonalReviewKeywordPage, { generateMetadata } from './tibia-11-seasonal-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11SeasonalReviewKeywordPage />;
}
