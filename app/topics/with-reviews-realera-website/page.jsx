import WithReviewsRealeraWebsiteKeywordPage, { generateMetadata } from './with-reviews-realera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRealeraWebsiteKeywordPage />;
}
