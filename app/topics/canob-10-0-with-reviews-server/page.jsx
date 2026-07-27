import Canob100WithReviewsServerKeywordPage, { generateMetadata } from './canob-10-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob100WithReviewsServerKeywordPage />;
}
