import WithReviewsElderaClientKeywordPage, { generateMetadata } from './with-reviews-eldera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsElderaClientKeywordPage />;
}
