import Tibia96SeasonalReviewKeywordPage, { generateMetadata } from './tibia-9-6-seasonal-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96SeasonalReviewKeywordPage />;
}
