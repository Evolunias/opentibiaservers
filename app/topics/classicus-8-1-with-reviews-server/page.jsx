import Classicus81WithReviewsServerKeywordPage, { generateMetadata } from './classicus-8-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus81WithReviewsServerKeywordPage />;
}
