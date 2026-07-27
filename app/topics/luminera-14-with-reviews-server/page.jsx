import Luminera14WithReviewsServerKeywordPage, { generateMetadata } from './luminera-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera14WithReviewsServerKeywordPage />;
}
