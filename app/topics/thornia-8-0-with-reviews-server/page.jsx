import Thornia80WithReviewsServerKeywordPage, { generateMetadata } from './thornia-8-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia80WithReviewsServerKeywordPage />;
}
