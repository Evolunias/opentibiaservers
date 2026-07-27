import Tibia13WithReviewsGuideKeywordPage, { generateMetadata } from './tibia-13-with-reviews-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithReviewsGuideKeywordPage />;
}
