import WithReviewsThaisotLoginKeywordPage, { generateMetadata } from './with-reviews-thaisot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThaisotLoginKeywordPage />;
}
