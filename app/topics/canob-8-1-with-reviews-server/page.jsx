import Canob81WithReviewsServerKeywordPage, { generateMetadata } from './canob-8-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob81WithReviewsServerKeywordPage />;
}
