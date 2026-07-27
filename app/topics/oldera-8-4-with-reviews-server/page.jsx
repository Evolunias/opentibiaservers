import Oldera84WithReviewsServerKeywordPage, { generateMetadata } from './oldera-8-4-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera84WithReviewsServerKeywordPage />;
}
