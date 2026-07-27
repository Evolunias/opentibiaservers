import Luminera74WithReviewsServerKeywordPage, { generateMetadata } from './luminera-7-4-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera74WithReviewsServerKeywordPage />;
}
