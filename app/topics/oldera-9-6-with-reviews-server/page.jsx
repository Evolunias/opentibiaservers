import Oldera96WithReviewsServerKeywordPage, { generateMetadata } from './oldera-9-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera96WithReviewsServerKeywordPage />;
}
