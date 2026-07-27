import Thornia76WithReviewsServerKeywordPage, { generateMetadata } from './thornia-7-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia76WithReviewsServerKeywordPage />;
}
