import WithReviewsRubinotOtsKeywordPage, { generateMetadata } from './with-reviews-rubinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRubinotOtsKeywordPage />;
}
