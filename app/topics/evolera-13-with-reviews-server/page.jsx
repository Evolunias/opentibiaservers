import Evolera13WithReviewsServerKeywordPage, { generateMetadata } from './evolera-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera13WithReviewsServerKeywordPage />;
}
