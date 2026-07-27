import Canob11WithReviewsServerKeywordPage, { generateMetadata } from './canob-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob11WithReviewsServerKeywordPage />;
}
