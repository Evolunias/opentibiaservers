import Luminera80WithReviewsServerKeywordPage, { generateMetadata } from './luminera-8-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera80WithReviewsServerKeywordPage />;
}
