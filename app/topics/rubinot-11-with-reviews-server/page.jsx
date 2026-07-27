import Rubinot11WithReviewsServerKeywordPage, { generateMetadata } from './rubinot-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot11WithReviewsServerKeywordPage />;
}
