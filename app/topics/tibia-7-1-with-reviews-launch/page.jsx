import Tibia71WithReviewsLaunchKeywordPage, { generateMetadata } from './tibia-7-1-with-reviews-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithReviewsLaunchKeywordPage />;
}
