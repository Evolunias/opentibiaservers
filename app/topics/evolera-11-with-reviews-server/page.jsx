import Evolera11WithReviewsServerKeywordPage, { generateMetadata } from './evolera-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera11WithReviewsServerKeywordPage />;
}
