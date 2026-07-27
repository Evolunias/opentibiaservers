import Luminera86WithReviewsServerKeywordPage, { generateMetadata } from './luminera-8-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera86WithReviewsServerKeywordPage />;
}
