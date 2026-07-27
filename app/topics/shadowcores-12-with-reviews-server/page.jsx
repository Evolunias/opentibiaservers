import Shadowcores12WithReviewsServerKeywordPage, { generateMetadata } from './shadowcores-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores12WithReviewsServerKeywordPage />;
}
