import WithReviewsRubinotPrivateServerKeywordPage, { generateMetadata } from './with-reviews-rubinot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRubinotPrivateServerKeywordPage />;
}
