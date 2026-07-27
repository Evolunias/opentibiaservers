import Tibia76WithReviewsLaunchKeywordPage, { generateMetadata } from './tibia-7-6-with-reviews-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithReviewsLaunchKeywordPage />;
}
