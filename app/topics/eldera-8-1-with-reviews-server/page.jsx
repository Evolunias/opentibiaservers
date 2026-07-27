import Eldera81WithReviewsServerKeywordPage, { generateMetadata } from './eldera-8-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera81WithReviewsServerKeywordPage />;
}
