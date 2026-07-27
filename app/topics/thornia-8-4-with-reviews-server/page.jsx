import Thornia84WithReviewsServerKeywordPage, { generateMetadata } from './thornia-8-4-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia84WithReviewsServerKeywordPage />;
}
