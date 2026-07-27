import Thornia13WithReviewsServerKeywordPage, { generateMetadata } from './thornia-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia13WithReviewsServerKeywordPage />;
}
