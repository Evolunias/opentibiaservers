import Luminera13WithReviewsServerKeywordPage, { generateMetadata } from './luminera-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera13WithReviewsServerKeywordPage />;
}
