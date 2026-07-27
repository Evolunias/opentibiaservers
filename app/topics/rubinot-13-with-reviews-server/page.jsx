import Rubinot13WithReviewsServerKeywordPage, { generateMetadata } from './rubinot-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot13WithReviewsServerKeywordPage />;
}
