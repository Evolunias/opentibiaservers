import WithReviewsAmeriaWebsiteKeywordPage, { generateMetadata } from './with-reviews-ameria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsAmeriaWebsiteKeywordPage />;
}
