import Tibia772SeasonalReviewKeywordPage, { generateMetadata } from './tibia-7-72-seasonal-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772SeasonalReviewKeywordPage />;
}
