import Thornia86WithReviewsServerKeywordPage, { generateMetadata } from './thornia-8-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia86WithReviewsServerKeywordPage />;
}
