import Realesta11WithReviewsServerKeywordPage, { generateMetadata } from './realesta-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta11WithReviewsServerKeywordPage />;
}
