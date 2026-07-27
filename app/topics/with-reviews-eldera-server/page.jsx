import WithReviewsElderaServerKeywordPage, { generateMetadata } from './with-reviews-eldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsElderaServerKeywordPage />;
}
