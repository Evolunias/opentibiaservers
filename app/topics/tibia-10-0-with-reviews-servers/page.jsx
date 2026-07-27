import Tibia100WithReviewsServersKeywordPage, { generateMetadata } from './tibia-10-0-with-reviews-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithReviewsServersKeywordPage />;
}
