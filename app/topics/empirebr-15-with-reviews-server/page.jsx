import Empirebr15WithReviewsServerKeywordPage, { generateMetadata } from './empirebr-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Empirebr15WithReviewsServerKeywordPage />;
}
