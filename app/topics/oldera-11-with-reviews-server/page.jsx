import Oldera11WithReviewsServerKeywordPage, { generateMetadata } from './oldera-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera11WithReviewsServerKeywordPage />;
}
