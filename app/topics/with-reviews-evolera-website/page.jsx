import WithReviewsEvoleraWebsiteKeywordPage, { generateMetadata } from './with-reviews-evolera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsEvoleraWebsiteKeywordPage />;
}
