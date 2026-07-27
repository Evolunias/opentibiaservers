import Tibia14WithReviewsLaunchKeywordPage, { generateMetadata } from './tibia-14-with-reviews-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithReviewsLaunchKeywordPage />;
}
