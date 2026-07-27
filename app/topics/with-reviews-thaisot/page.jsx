import WithReviewsThaisotKeywordPage, { generateMetadata } from './with-reviews-thaisot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThaisotKeywordPage />;
}
