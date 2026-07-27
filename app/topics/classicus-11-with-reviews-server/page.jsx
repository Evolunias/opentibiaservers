import Classicus11WithReviewsServerKeywordPage, { generateMetadata } from './classicus-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus11WithReviewsServerKeywordPage />;
}
