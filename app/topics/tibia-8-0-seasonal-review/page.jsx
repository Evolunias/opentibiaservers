import Tibia80SeasonalReviewKeywordPage, { generateMetadata } from './tibia-8-0-seasonal-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80SeasonalReviewKeywordPage />;
}
