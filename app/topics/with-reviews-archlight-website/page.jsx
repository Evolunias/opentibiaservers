import WithReviewsArchlightWebsiteKeywordPage, { generateMetadata } from './with-reviews-archlight-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArchlightWebsiteKeywordPage />;
}
