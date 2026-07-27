import Thornia11WithReviewsServerKeywordPage, { generateMetadata } from './thornia-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia11WithReviewsServerKeywordPage />;
}
