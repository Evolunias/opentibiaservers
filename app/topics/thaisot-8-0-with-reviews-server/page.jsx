import Thaisot80WithReviewsServerKeywordPage, { generateMetadata } from './thaisot-8-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot80WithReviewsServerKeywordPage />;
}
