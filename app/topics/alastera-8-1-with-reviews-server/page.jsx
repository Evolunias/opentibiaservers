import Alastera81WithReviewsServerKeywordPage, { generateMetadata } from './alastera-8-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera81WithReviewsServerKeywordPage />;
}
