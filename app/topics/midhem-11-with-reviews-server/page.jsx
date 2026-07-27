import Midhem11WithReviewsServerKeywordPage, { generateMetadata } from './midhem-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem11WithReviewsServerKeywordPage />;
}
