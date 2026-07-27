import WithReviewsOlderaWebsiteKeywordPage, { generateMetadata } from './with-reviews-oldera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOlderaWebsiteKeywordPage />;
}
