import Tibia11WithReviewsLaunchKeywordPage, { generateMetadata } from './tibia-11-with-reviews-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithReviewsLaunchKeywordPage />;
}
