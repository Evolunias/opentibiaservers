import WithReviewsImperianicWebsiteKeywordPage, { generateMetadata } from './with-reviews-imperianic-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsImperianicWebsiteKeywordPage />;
}
