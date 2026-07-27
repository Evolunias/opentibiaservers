import Saintsot15WithReviewsServerKeywordPage, { generateMetadata } from './saintsot-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot15WithReviewsServerKeywordPage />;
}
