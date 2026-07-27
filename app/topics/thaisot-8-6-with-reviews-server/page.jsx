import Thaisot86WithReviewsServerKeywordPage, { generateMetadata } from './thaisot-8-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot86WithReviewsServerKeywordPage />;
}
