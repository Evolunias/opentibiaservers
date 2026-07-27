import Midhem71WithReviewsServerKeywordPage, { generateMetadata } from './midhem-7-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem71WithReviewsServerKeywordPage />;
}
