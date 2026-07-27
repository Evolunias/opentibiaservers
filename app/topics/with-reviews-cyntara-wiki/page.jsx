import WithReviewsCyntaraWikiKeywordPage, { generateMetadata } from './with-reviews-cyntara-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCyntaraWikiKeywordPage />;
}
