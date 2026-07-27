import Ameria11WithReviewsServerKeywordPage, { generateMetadata } from './ameria-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria11WithReviewsServerKeywordPage />;
}
