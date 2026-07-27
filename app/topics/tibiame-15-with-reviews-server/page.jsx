import Tibiame15WithReviewsServerKeywordPage, { generateMetadata } from './tibiame-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame15WithReviewsServerKeywordPage />;
}
