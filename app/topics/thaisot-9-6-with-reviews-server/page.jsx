import Thaisot96WithReviewsServerKeywordPage, { generateMetadata } from './thaisot-9-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot96WithReviewsServerKeywordPage />;
}
