import Oxygenot15WithReviewsServerKeywordPage, { generateMetadata } from './oxygenot-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot15WithReviewsServerKeywordPage />;
}
