import WithReviewsOlderaOtKeywordPage, { generateMetadata } from './with-reviews-oldera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOlderaOtKeywordPage />;
}
