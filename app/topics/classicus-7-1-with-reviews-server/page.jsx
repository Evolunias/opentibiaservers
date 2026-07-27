import Classicus71WithReviewsServerKeywordPage, { generateMetadata } from './classicus-7-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus71WithReviewsServerKeywordPage />;
}
