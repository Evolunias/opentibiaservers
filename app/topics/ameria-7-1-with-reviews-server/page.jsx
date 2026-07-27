import Ameria71WithReviewsServerKeywordPage, { generateMetadata } from './ameria-7-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria71WithReviewsServerKeywordPage />;
}
