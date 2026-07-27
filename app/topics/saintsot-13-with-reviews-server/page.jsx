import Saintsot13WithReviewsServerKeywordPage, { generateMetadata } from './saintsot-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot13WithReviewsServerKeywordPage />;
}
