import Tibia74SeasonalReviewKeywordPage, { generateMetadata } from './tibia-7-4-seasonal-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74SeasonalReviewKeywordPage />;
}
