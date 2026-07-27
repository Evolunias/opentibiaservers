import WithReviewsNilotWebsiteKeywordPage, { generateMetadata } from './with-reviews-nilot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNilotWebsiteKeywordPage />;
}
