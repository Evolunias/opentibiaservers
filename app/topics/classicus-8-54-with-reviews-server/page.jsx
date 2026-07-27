import Classicus854WithReviewsServerKeywordPage, { generateMetadata } from './classicus-8-54-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus854WithReviewsServerKeywordPage />;
}
