import Tibia80WithReviewsLaunchKeywordPage, { generateMetadata } from './tibia-8-0-with-reviews-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithReviewsLaunchKeywordPage />;
}
