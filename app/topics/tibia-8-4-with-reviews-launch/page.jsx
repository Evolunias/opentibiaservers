import Tibia84WithReviewsLaunchKeywordPage, { generateMetadata } from './tibia-8-4-with-reviews-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithReviewsLaunchKeywordPage />;
}
