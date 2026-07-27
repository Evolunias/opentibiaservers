import Eldera86WithReviewsServerKeywordPage, { generateMetadata } from './eldera-8-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera86WithReviewsServerKeywordPage />;
}
