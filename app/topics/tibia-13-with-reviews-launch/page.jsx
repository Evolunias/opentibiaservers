import Tibia13WithReviewsLaunchKeywordPage, { generateMetadata } from './tibia-13-with-reviews-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithReviewsLaunchKeywordPage />;
}
