import Shadowcores11WithReviewsServerKeywordPage, { generateMetadata } from './shadowcores-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores11WithReviewsServerKeywordPage />;
}
