import Thornia14WithReviewsServerKeywordPage, { generateMetadata } from './thornia-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia14WithReviewsServerKeywordPage />;
}
