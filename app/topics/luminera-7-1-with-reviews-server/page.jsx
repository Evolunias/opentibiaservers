import Luminera71WithReviewsServerKeywordPage, { generateMetadata } from './luminera-7-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera71WithReviewsServerKeywordPage />;
}
