import WithReviewsThaisotServerKeywordPage, { generateMetadata } from './with-reviews-thaisot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThaisotServerKeywordPage />;
}
