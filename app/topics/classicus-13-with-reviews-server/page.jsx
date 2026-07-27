import Classicus13WithReviewsServerKeywordPage, { generateMetadata } from './classicus-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus13WithReviewsServerKeywordPage />;
}
