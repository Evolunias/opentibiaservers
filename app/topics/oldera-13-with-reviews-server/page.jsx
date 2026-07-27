import Oldera13WithReviewsServerKeywordPage, { generateMetadata } from './oldera-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera13WithReviewsServerKeywordPage />;
}
