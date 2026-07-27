import Canob12WithReviewsServerKeywordPage, { generateMetadata } from './canob-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob12WithReviewsServerKeywordPage />;
}
