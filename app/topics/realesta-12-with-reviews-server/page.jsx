import Realesta12WithReviewsServerKeywordPage, { generateMetadata } from './realesta-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta12WithReviewsServerKeywordPage />;
}
