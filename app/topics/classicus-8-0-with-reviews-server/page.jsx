import Classicus80WithReviewsServerKeywordPage, { generateMetadata } from './classicus-8-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus80WithReviewsServerKeywordPage />;
}
