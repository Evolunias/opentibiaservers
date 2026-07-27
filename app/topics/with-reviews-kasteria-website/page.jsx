import WithReviewsKasteriaWebsiteKeywordPage, { generateMetadata } from './with-reviews-kasteria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsKasteriaWebsiteKeywordPage />;
}
