import Tibia15WithReviewsLaunchKeywordPage, { generateMetadata } from './tibia-15-with-reviews-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithReviewsLaunchKeywordPage />;
}
