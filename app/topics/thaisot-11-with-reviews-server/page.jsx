import Thaisot11WithReviewsServerKeywordPage, { generateMetadata } from './thaisot-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot11WithReviewsServerKeywordPage />;
}
