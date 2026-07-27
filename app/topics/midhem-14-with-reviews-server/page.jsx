import Midhem14WithReviewsServerKeywordPage, { generateMetadata } from './midhem-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem14WithReviewsServerKeywordPage />;
}
