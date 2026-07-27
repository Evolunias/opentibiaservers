import Ameria15WithReviewsServerKeywordPage, { generateMetadata } from './ameria-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria15WithReviewsServerKeywordPage />;
}
