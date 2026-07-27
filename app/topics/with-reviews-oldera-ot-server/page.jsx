import WithReviewsOlderaOtServerKeywordPage, { generateMetadata } from './with-reviews-oldera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOlderaOtServerKeywordPage />;
}
