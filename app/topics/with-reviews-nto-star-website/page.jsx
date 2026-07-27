import WithReviewsNtoStarWebsiteKeywordPage, { generateMetadata } from './with-reviews-nto-star-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNtoStarWebsiteKeywordPage />;
}
