import Shadowcores14WithReviewsServerKeywordPage, { generateMetadata } from './shadowcores-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores14WithReviewsServerKeywordPage />;
}
