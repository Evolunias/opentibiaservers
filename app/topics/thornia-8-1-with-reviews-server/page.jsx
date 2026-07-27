import Thornia81WithReviewsServerKeywordPage, { generateMetadata } from './thornia-8-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia81WithReviewsServerKeywordPage />;
}
