import Medivia15WithReviewsServerKeywordPage, { generateMetadata } from './medivia-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia15WithReviewsServerKeywordPage />;
}
