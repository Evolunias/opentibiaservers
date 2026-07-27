import WithReviewsClassickDrakoriaServerKeywordPage, { generateMetadata } from './with-reviews-classick-drakoria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsClassickDrakoriaServerKeywordPage />;
}
