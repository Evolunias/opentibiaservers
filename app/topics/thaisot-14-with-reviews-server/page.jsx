import Thaisot14WithReviewsServerKeywordPage, { generateMetadata } from './thaisot-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot14WithReviewsServerKeywordPage />;
}
