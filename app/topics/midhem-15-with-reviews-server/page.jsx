import Midhem15WithReviewsServerKeywordPage, { generateMetadata } from './midhem-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem15WithReviewsServerKeywordPage />;
}
