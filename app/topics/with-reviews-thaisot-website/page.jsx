import WithReviewsThaisotWebsiteKeywordPage, { generateMetadata } from './with-reviews-thaisot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThaisotWebsiteKeywordPage />;
}
