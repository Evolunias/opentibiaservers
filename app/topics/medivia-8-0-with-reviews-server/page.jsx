import Medivia80WithReviewsServerKeywordPage, { generateMetadata } from './medivia-8-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia80WithReviewsServerKeywordPage />;
}
