import Shadowcores96WithReviewsServerKeywordPage, { generateMetadata } from './shadowcores-9-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores96WithReviewsServerKeywordPage />;
}
