import Tibia11WithReviewsGuideKeywordPage, { generateMetadata } from './tibia-11-with-reviews-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithReviewsGuideKeywordPage />;
}
