import Tibia86WithReviewsLaunchKeywordPage, { generateMetadata } from './tibia-8-6-with-reviews-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithReviewsLaunchKeywordPage />;
}
