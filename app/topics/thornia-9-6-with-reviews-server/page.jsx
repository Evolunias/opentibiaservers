import Thornia96WithReviewsServerKeywordPage, { generateMetadata } from './thornia-9-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia96WithReviewsServerKeywordPage />;
}
