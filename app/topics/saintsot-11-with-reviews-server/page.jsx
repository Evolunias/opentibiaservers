import Saintsot11WithReviewsServerKeywordPage, { generateMetadata } from './saintsot-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot11WithReviewsServerKeywordPage />;
}
