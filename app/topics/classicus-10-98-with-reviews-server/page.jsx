import Classicus1098WithReviewsServerKeywordPage, { generateMetadata } from './classicus-10-98-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus1098WithReviewsServerKeywordPage />;
}
