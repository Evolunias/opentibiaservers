import Shadowcores15WithReviewsServerKeywordPage, { generateMetadata } from './shadowcores-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores15WithReviewsServerKeywordPage />;
}
