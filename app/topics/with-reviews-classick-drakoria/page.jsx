import WithReviewsClassickDrakoriaKeywordPage, { generateMetadata } from './with-reviews-classick-drakoria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsClassickDrakoriaKeywordPage />;
}
