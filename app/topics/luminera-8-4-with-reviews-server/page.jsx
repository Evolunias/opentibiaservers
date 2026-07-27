import Luminera84WithReviewsServerKeywordPage, { generateMetadata } from './luminera-8-4-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera84WithReviewsServerKeywordPage />;
}
