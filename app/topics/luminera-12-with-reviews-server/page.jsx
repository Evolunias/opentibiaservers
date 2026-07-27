import Luminera12WithReviewsServerKeywordPage, { generateMetadata } from './luminera-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera12WithReviewsServerKeywordPage />;
}
