import WithReviewsThaisotOtKeywordPage, { generateMetadata } from './with-reviews-thaisot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThaisotOtKeywordPage />;
}
