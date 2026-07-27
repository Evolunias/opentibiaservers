import Classicus100WithReviewsServerKeywordPage, { generateMetadata } from './classicus-10-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus100WithReviewsServerKeywordPage />;
}
