import Rubinot15WithReviewsServerKeywordPage, { generateMetadata } from './rubinot-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot15WithReviewsServerKeywordPage />;
}
