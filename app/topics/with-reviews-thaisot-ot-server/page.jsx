import WithReviewsThaisotOtServerKeywordPage, { generateMetadata } from './with-reviews-thaisot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThaisotOtServerKeywordPage />;
}
