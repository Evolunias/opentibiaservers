import Classicus74WithReviewsServerKeywordPage, { generateMetadata } from './classicus-7-4-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus74WithReviewsServerKeywordPage />;
}
