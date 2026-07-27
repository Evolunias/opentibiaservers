import Thornia12WithReviewsServerKeywordPage, { generateMetadata } from './thornia-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia12WithReviewsServerKeywordPage />;
}
