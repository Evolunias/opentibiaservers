import Classicus14WithReviewsServerKeywordPage, { generateMetadata } from './classicus-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus14WithReviewsServerKeywordPage />;
}
