import Canob13WithReviewsServerKeywordPage, { generateMetadata } from './canob-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob13WithReviewsServerKeywordPage />;
}
