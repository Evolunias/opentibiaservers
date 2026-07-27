import Thaisot13WithReviewsServerKeywordPage, { generateMetadata } from './thaisot-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot13WithReviewsServerKeywordPage />;
}
