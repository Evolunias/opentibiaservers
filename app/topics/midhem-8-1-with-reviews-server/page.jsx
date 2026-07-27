import Midhem81WithReviewsServerKeywordPage, { generateMetadata } from './midhem-8-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem81WithReviewsServerKeywordPage />;
}
