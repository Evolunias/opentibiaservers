import Thornia74WithReviewsServerKeywordPage, { generateMetadata } from './thornia-7-4-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia74WithReviewsServerKeywordPage />;
}
