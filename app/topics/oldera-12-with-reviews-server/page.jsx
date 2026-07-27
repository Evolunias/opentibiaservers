import Oldera12WithReviewsServerKeywordPage, { generateMetadata } from './oldera-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera12WithReviewsServerKeywordPage />;
}
