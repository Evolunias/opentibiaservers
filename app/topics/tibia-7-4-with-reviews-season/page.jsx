import Tibia74WithReviewsSeasonKeywordPage, { generateMetadata } from './tibia-7-4-with-reviews-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74WithReviewsSeasonKeywordPage />;
}
