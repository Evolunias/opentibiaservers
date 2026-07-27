import Classicus15WithReviewsServerKeywordPage, { generateMetadata } from './classicus-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus15WithReviewsServerKeywordPage />;
}
