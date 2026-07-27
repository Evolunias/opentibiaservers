import WithReviewsCanobWebsiteKeywordPage, { generateMetadata } from './with-reviews-canob-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCanobWebsiteKeywordPage />;
}
