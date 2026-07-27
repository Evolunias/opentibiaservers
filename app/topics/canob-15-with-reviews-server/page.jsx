import Canob15WithReviewsServerKeywordPage, { generateMetadata } from './canob-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob15WithReviewsServerKeywordPage />;
}
