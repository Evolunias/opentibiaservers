import WithReviewsOtServerBrazilKeywordPage, { generateMetadata } from './with-reviews-ot-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOtServerBrazilKeywordPage />;
}
