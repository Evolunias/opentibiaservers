import WithReviewsNepreniaWebsiteKeywordPage, { generateMetadata } from './with-reviews-neprenia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNepreniaWebsiteKeywordPage />;
}
