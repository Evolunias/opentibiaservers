import Thaisot12WithReviewsServerKeywordPage, { generateMetadata } from './thaisot-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot12WithReviewsServerKeywordPage />;
}
