import WithReviewsCarlinotPrivateServerKeywordPage, { generateMetadata } from './with-reviews-carlinot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCarlinotPrivateServerKeywordPage />;
}
