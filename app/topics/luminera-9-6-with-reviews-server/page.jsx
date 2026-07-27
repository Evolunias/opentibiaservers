import Luminera96WithReviewsServerKeywordPage, { generateMetadata } from './luminera-9-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera96WithReviewsServerKeywordPage />;
}
