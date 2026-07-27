import Classicus12WithReviewsServerKeywordPage, { generateMetadata } from './classicus-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus12WithReviewsServerKeywordPage />;
}
