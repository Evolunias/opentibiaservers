import Shadowcores71WithReviewsServerKeywordPage, { generateMetadata } from './shadowcores-7-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores71WithReviewsServerKeywordPage />;
}
