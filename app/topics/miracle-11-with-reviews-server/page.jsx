import Miracle11WithReviewsServerKeywordPage, { generateMetadata } from './miracle-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle11WithReviewsServerKeywordPage />;
}
