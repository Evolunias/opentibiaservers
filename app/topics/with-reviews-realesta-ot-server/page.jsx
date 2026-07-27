import WithReviewsRealestaOtServerKeywordPage, { generateMetadata } from './with-reviews-realesta-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRealestaOtServerKeywordPage />;
}
