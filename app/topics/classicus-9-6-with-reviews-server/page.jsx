import Classicus96WithReviewsServerKeywordPage, { generateMetadata } from './classicus-9-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus96WithReviewsServerKeywordPage />;
}
