import Tibia12WithReviewsGuideKeywordPage, { generateMetadata } from './tibia-12-with-reviews-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithReviewsGuideKeywordPage />;
}
