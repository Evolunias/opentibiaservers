import WithReviewsMidhemWikiKeywordPage, { generateMetadata } from './with-reviews-midhem-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMidhemWikiKeywordPage />;
}
