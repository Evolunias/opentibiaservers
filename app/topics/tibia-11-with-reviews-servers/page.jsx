import Tibia11WithReviewsServersKeywordPage, { generateMetadata } from './tibia-11-with-reviews-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithReviewsServersKeywordPage />;
}
