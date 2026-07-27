import WithReviewsRealestaWebsiteKeywordPage, { generateMetadata } from './with-reviews-realesta-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRealestaWebsiteKeywordPage />;
}
