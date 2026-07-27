import Oldera81WithReviewsServerKeywordPage, { generateMetadata } from './oldera-8-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera81WithReviewsServerKeywordPage />;
}
