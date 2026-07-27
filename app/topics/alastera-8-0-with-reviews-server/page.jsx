import Alastera80WithReviewsServerKeywordPage, { generateMetadata } from './alastera-8-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera80WithReviewsServerKeywordPage />;
}
