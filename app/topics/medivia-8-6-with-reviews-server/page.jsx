import Medivia86WithReviewsServerKeywordPage, { generateMetadata } from './medivia-8-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia86WithReviewsServerKeywordPage />;
}
