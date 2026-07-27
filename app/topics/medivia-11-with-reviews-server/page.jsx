import Medivia11WithReviewsServerKeywordPage, { generateMetadata } from './medivia-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia11WithReviewsServerKeywordPage />;
}
