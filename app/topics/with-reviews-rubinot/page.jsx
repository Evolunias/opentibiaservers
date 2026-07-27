import WithReviewsRubinotKeywordPage, { generateMetadata } from './with-reviews-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRubinotKeywordPage />;
}
