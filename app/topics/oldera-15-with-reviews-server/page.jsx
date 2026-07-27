import Oldera15WithReviewsServerKeywordPage, { generateMetadata } from './oldera-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera15WithReviewsServerKeywordPage />;
}
