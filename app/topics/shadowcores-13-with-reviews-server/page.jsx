import Shadowcores13WithReviewsServerKeywordPage, { generateMetadata } from './shadowcores-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores13WithReviewsServerKeywordPage />;
}
