import Shadowcores84WithReviewsServerKeywordPage, { generateMetadata } from './shadowcores-8-4-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores84WithReviewsServerKeywordPage />;
}
