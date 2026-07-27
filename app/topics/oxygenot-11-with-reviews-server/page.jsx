import Oxygenot11WithReviewsServerKeywordPage, { generateMetadata } from './oxygenot-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot11WithReviewsServerKeywordPage />;
}
