import Midhem12WithReviewsServerKeywordPage, { generateMetadata } from './midhem-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem12WithReviewsServerKeywordPage />;
}
