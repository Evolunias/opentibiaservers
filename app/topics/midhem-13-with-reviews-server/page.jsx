import Midhem13WithReviewsServerKeywordPage, { generateMetadata } from './midhem-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem13WithReviewsServerKeywordPage />;
}
