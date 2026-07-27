import Thaisot84WithReviewsServerKeywordPage, { generateMetadata } from './thaisot-8-4-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot84WithReviewsServerKeywordPage />;
}
