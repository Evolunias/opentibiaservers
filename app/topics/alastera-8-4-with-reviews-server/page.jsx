import Alastera84WithReviewsServerKeywordPage, { generateMetadata } from './alastera-8-4-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera84WithReviewsServerKeywordPage />;
}
