import Oldera74WithReviewsServerKeywordPage, { generateMetadata } from './oldera-7-4-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera74WithReviewsServerKeywordPage />;
}
