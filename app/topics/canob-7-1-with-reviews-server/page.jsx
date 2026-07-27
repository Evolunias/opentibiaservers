import Canob71WithReviewsServerKeywordPage, { generateMetadata } from './canob-7-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob71WithReviewsServerKeywordPage />;
}
