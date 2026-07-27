import Tibia86WithReviewsServersKeywordPage, { generateMetadata } from './tibia-8-6-with-reviews-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithReviewsServersKeywordPage />;
}
