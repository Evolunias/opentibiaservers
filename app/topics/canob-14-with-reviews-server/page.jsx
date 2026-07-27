import Canob14WithReviewsServerKeywordPage, { generateMetadata } from './canob-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob14WithReviewsServerKeywordPage />;
}
