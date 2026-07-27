import WithReviewsMidhemWebsiteKeywordPage, { generateMetadata } from './with-reviews-midhem-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMidhemWebsiteKeywordPage />;
}
