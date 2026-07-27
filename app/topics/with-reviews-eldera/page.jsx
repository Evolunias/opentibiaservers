import WithReviewsElderaKeywordPage, { generateMetadata } from './with-reviews-eldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsElderaKeywordPage />;
}
