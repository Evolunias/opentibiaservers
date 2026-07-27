import Ameria80WithReviewsServerKeywordPage, { generateMetadata } from './ameria-8-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria80WithReviewsServerKeywordPage />;
}
