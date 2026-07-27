import Thornia100WithReviewsServerKeywordPage, { generateMetadata } from './thornia-10-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia100WithReviewsServerKeywordPage />;
}
