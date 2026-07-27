import WithReviewsRubinotOtKeywordPage, { generateMetadata } from './with-reviews-rubinot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRubinotOtKeywordPage />;
}
