import Thaisot81WithReviewsServerKeywordPage, { generateMetadata } from './thaisot-8-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot81WithReviewsServerKeywordPage />;
}
