import Canob80WithReviewsServerKeywordPage, { generateMetadata } from './canob-8-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob80WithReviewsServerKeywordPage />;
}
