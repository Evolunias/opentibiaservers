import Classicus772WithReviewsServerKeywordPage, { generateMetadata } from './classicus-7-72-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus772WithReviewsServerKeywordPage />;
}
