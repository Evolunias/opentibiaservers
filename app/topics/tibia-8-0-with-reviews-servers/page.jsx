import Tibia80WithReviewsServersKeywordPage, { generateMetadata } from './tibia-8-0-with-reviews-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithReviewsServersKeywordPage />;
}
