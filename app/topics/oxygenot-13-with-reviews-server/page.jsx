import Oxygenot13WithReviewsServerKeywordPage, { generateMetadata } from './oxygenot-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot13WithReviewsServerKeywordPage />;
}
