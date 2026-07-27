import Midhem80WithReviewsServerKeywordPage, { generateMetadata } from './midhem-8-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem80WithReviewsServerKeywordPage />;
}
