import WithReviewsCyntaraWebsiteKeywordPage, { generateMetadata } from './with-reviews-cyntara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCyntaraWebsiteKeywordPage />;
}
