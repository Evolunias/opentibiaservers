import Evolunia11WithReviewsServerKeywordPage, { generateMetadata } from './evolunia-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia11WithReviewsServerKeywordPage />;
}
