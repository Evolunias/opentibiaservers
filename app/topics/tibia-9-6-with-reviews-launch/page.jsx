import Tibia96WithReviewsLaunchKeywordPage, { generateMetadata } from './tibia-9-6-with-reviews-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithReviewsLaunchKeywordPage />;
}
