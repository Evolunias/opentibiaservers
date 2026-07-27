import WithReviewsRubinotServerKeywordPage, { generateMetadata } from './with-reviews-rubinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRubinotServerKeywordPage />;
}
