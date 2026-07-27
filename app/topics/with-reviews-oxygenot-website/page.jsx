import WithReviewsOxygenotWebsiteKeywordPage, { generateMetadata } from './with-reviews-oxygenot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOxygenotWebsiteKeywordPage />;
}
