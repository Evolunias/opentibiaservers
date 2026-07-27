import Oldera71WithReviewsServerKeywordPage, { generateMetadata } from './oldera-7-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera71WithReviewsServerKeywordPage />;
}
