import Oldera76WithReviewsServerKeywordPage, { generateMetadata } from './oldera-7-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera76WithReviewsServerKeywordPage />;
}
